var searchIndex = new Map(JSON.parse('[\
["os",{"doc":"The main module and entrypoint","t":"CHCCCCQQHCCCCCCSSSESSSFNNNNHNNNNHJFJFNNNNNNOONNHHNNHNNHNNNNNNNHHHECFNNNNONNNNNSSSSCCHSHHHHFFFFONNNNNNCONHNNNNONNNHNHNOOHNHNOOHCCONNNNNNNNNFNNNNNNOOONNNNHPPPFGPNNNNNNNNNNNOONNNNNNSSHHHFCHHOOHOFNNNNNONONNNO","n":["board","clear_bss","config","console","lang_items","loader","print","println","rust_main","sbi","sync","syscall","task","timer","trap","CLOCK_FREQ","APP_BASE_ADDRESS","APP_SIZE_LIMIT","CLOCK_FREQ","KERNEL_STACK_SIZE","MAX_APP_NUM","USER_STACK_SIZE","Stdout","borrow","borrow_mut","from","into","print","try_from","try_into","type_id","write_str","panic","KERNEL_STACK","KernelStack","USER_STACK","UserStack","borrow","borrow","borrow_mut","borrow_mut","clone","clone","data","data","from","from","get_base_i","get_num_app","get_sp","get_sp","init_app_cx","into","into","load_apps","push_context","try_from","try_from","try_into","try_into","type_id","type_id","console_putchar","set_timer","shutdown","UPSafeCell","up","UPSafeCell","borrow","borrow_mut","exclusive_access","from","inner","into","new","try_from","try_into","type_id","SYSCALL_EXIT","SYSCALL_GET_TIME","SYSCALL_WRITE","SYSCALL_YIELD","fs","process","syscall","FD_STDOUT","sys_write","sys_exit","sys_get_time","sys_yield","TASK_MANAGER","TaskContext","TaskManager","TaskManagerInner","__private_field","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","context","current_task","deref","exit_current_and_run_next","find_next_task","from","from","from","inner","into","into","into","mark_current_exited","mark_current_exited","mark_current_suspended","mark_current_suspended","num_app","ra","run_first_task","run_first_task","run_next_task","run_next_task","s","sp","suspend_current_and_run_next","switch","task","tasks","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","TaskContext","borrow","borrow_mut","clone","from","goto_restore","into","ra","s","sp","try_from","try_into","type_id","zero_init","__switch","Exited","Ready","Running","TaskControlBlock","TaskStatus","UnInit","borrow","borrow","borrow_mut","borrow_mut","clone","clone","eq","from","from","into","into","task_cx","task_status","try_from","try_from","try_into","try_into","type_id","type_id","MSEC_PER_SEC","TICKS_PER_SEC","get_time","get_time_ms","set_next_trigger","TrapContext","context","enable_timer_interrupt","init","sepc","sstatus","trap_handler","x","TrapContext","app_init_context","borrow","borrow_mut","from","into","sepc","set_sp","sstatus","try_from","try_into","type_id","x"],"q":[[0,"os"],[15,"os::board"],[16,"os::config"],[22,"os::console"],[32,"os::lang_items"],[33,"os::loader"],[62,"os::sbi"],[65,"os::sync"],[67,"os::sync::up"],[78,"os::syscall"],[85,"os::syscall::fs"],[87,"os::syscall::process"],[90,"os::task"],[138,"os::task::context"],[152,"os::task::switch"],[153,"os::task::task"],[178,"os::timer"],[183,"os::trap"],[191,"os::trap::context"],[204,"core::fmt"],[205,"core::result"],[206,"core::any"],[207,"core::fmt"],[208,"core::cell"],[209,"core::option"]],"d":["Constants used in rCore for qemu","clear BSS segment","Constants used in rCore","SBI console driver, for text output","The panic handler","Loading user applications into memory","print string macro","println string macro","the rust entry-point of os","SBI call wrappers","Synchronization and interior mutability primitives","Implementation of syscalls","Task management implementation","RISC-V timer-related functionality","Trap handling functionality","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Get base address of app i.","Get the total number of applications.","","","get app info with entry and sp and save <code>TrapContext</code> in …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Load nth user app at [APP_BASE_ADDRESS + n * …","","","","","","","","use sbi call to putchar in console (qemu uart handler)","use sbi call to set timer","use sbi call to shutdown the kernel","","Uniprocessor interior mutability primitives","Wrap a static data structure inside it so that we are able …","","","Exclusive access inner data in UPSafeCell. Panic if the …","Returns the argument unchanged.","inner data","Calls <code>U::from(self)</code>.","User is responsible to guarantee that inner struct is only …","","","","","","","","File and filesystem-related syscalls","Process management syscalls","handle syscall exception with <code>syscall_id</code> and other …","","write buf of length <code>len</code>  to a file with <code>fd</code>","task exits and submit an exit code","get time in milliseconds","current task gives up resources for other tasks","Global variable: TASK_MANAGER","Task Context","The task manager, where all the tasks are managed.","Inner of Task Manager","","","","","","","","Implementation of <code>TaskContext</code>","id of current <code>Running</code> task","","exit current task,  then run next task","Find next task to run and return task id.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","use inner value to get mutable access","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","exit current task","Change the status of current <code>Running</code> task into <code>Exited</code>.","suspend current task","Change the status of current <code>Running</code> task into <code>Ready</code>.","total number of tasks","return address ( e.g. __restore ) of __switch ASM function","run first task","Run the first task in task list.","rust next task","Switch current <code>Running</code> task to the task we have found, or …","callee saved registers:  s 0..11","kernel stack pointer of app","suspend current task, then run next task","Rust wrapper around <code>__switch</code>.","Types related to task management","task list","","","","","","","","","","Task Context","","","","Returns the argument unchanged.","set task context {__restore ASM funciton, kernel stack, …","Calls <code>U::from(self)</code>.","return address ( e.g. __restore ) of __switch ASM function","callee saved registers:  s 0..11","kernel stack pointer of app","","","","init task context","Switch to the context of <code>next_task_cx_ptr</code>, saving the …","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","read the <code>mtime</code> register","get current time in milliseconds","set the next timer interrupt","Trap Context","","timer interrupt enabled","initialize CSR <code>stvec</code> as the entry of <code>__alltraps</code>","CSR sepc","CSR sstatus      ","handle an interrupt, exception, or system call from user …","general regs[0..31]","Trap Context","init app context","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","CSR sepc","set stack pointer to x_2 reg (sp)","CSR sstatus      ","","","","general regs[0..31]"],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,0,6,6,6,6,0,0,0,0,0,10,11,10,11,10,11,10,11,10,11,0,0,10,11,0,10,11,0,10,10,11,10,11,10,11,0,0,0,0,0,0,15,15,15,15,15,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,27,21,22,27,21,0,27,21,0,22,22,27,21,22,22,27,21,0,22,0,22,22,24,0,22,0,22,24,24,0,0,0,27,22,27,21,22,27,21,22,27,21,0,24,24,24,24,24,24,24,24,24,24,24,24,24,0,26,26,26,0,0,26,25,26,25,26,25,26,26,25,26,25,26,25,25,25,26,25,26,25,26,0,0,0,0,0,0,0,0,0,13,13,0,13,0,13,13,13,13,13,13,13,13,13,13,13,13],"f":"`{{}b}``````{{}d}``````````````{ce{}{}}0{cc{}}1{fb}{c{{h{e}}}{}{}}0{cj{}}{{ln}A`}{Abd}````6666{AdAd}{AfAf}``77{AhAh}{{}Ah}{AdAh}{AfAh}3<<>{{AdAj}Ah}::::99{Ahb}0{Ald}```??{{{An{c}}}{{B`{c}}}{}}?`{ce{}{}}{c{{An{c}}}{}}??>``````{{Ah{Bb{Ah}}}Bd}`{{AhBfAh}Bd}{Bhd}{{}Bd}0`````555555``{BjBl}{{}b}{Bl{{Bn{Ah}}}}{cc{}}00`9992{Blb}30``3{Bld}41``4```{c{{h{e}}}{}{}}00000{cj{}}00`=={C`C`}5{AhC`}?```332{{}C`}```````{ce{}{}}000{CbCb}{CdCd}{{CdCd}Al};;33``888877``{{}Ah}0>``>>``{AjAj}``{{AhAh}Aj}66>6`{{AjAh}b}`<<;`","c":[],"p":[[1,"unit"],[1,"never"],[5,"Arguments",204],[6,"Result",205],[5,"TypeId",206],[5,"Stdout",22],[1,"str"],[8,"Result",204],[5,"PanicInfo",207],[5,"KernelStack",33],[5,"UserStack",33],[1,"usize"],[5,"TrapContext",191],[1,"bool"],[5,"UPSafeCell",67],[5,"RefMut",208],[1,"array"],[1,"isize"],[1,"u8"],[1,"i32"],[5,"TASK_MANAGER",90],[5,"TaskManager",90],[6,"Option",209],[5,"TaskContext",138],[5,"TaskControlBlock",153],[6,"TaskStatus",153],[5,"TaskManagerInner",90]],"b":[]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
