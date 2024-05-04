use core::time;

use crate::mm::translated_byte_buffer;
use crate::task::{
    current_user_token, exit_current_and_run_next, suspend_current_and_run_next
};
use crate::timer::get_time_us;

#[repr(C)]
#[derive(Debug)]
pub struct TimeVal {
    pub sec: usize,
    pub usec: usize,
}

pub fn sys_exit(exit_code: i32) -> ! {
    println!("[kernel] Application exited with code {}", exit_code);
    exit_current_and_run_next();
    panic!("Unreachable in sys_exit!");
}

pub fn sys_yield() -> isize {
    suspend_current_and_run_next();
    0
}

// The address provided in parameter is user space address
pub fn sys_get_time(ts: *mut TimeVal, tz: usize) -> isize {
    let us = get_time_us();
    let time_val_size = core::mem::size_of::<TimeVal>();
    let mut buffers = translated_byte_buffer(current_user_token(), ts as *mut u8, time_val_size);
    let tv = TimeVal {
        sec: us / 1_000_000,
        usec: us % 1_000_000,
    };

    let tv_pointer = core::ptr::addr_of!(tv) as *const u8;
    let tv_slice: &[u8]= unsafe {core::slice::from_raw_parts(tv_pointer, core::mem::size_of::<TimeVal>())};

    buffers[0].copy_from_slice(tv_slice);

    0
}