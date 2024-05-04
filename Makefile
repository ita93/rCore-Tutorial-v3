DOCKER_NAME ?= dinghao188/rcore-tutorial
.PHONY: docker build_docker

docker:
	docker run --rm -it --mount type=bind,source=$(shell pwd),destination=/mnt ${DOCKER_NAME}

build_docker: 
	docker build -t ${DOCKER_NAME} .
codespaces_setenv:	
	mkdir -p ~/.config/fish/conf.d 
	sudo apt update
	sudo apt install autoconf automake autotools-dev curl libmpc-dev libmpfr-dev libgmp-dev \
              gawk build-essential bison flex texinfo gperf libtool patchutils bc \
              zlib1g-dev libexpat-dev pkg-config  libglib2.0-dev libpixman-1-dev git tmux python3 ninja-build zsh -y
	cd .. && wget https://download.qemu.org/qemu-7.0.0.tar.xz
	cd .. && tar xvJf qemu-7.0.0.tar.xz
	cd ../qemu-7.0.0 && ./configure --target-list=riscv64-softmmu,riscv64-linux-user
	cd ../qemu-7.0.0 && make -j$(nproc)
	cd ../qemu-7.0.0 && sudo make install
	qemu-system-riscv64 --version
	qemu-riscv64 --version
	curl https://sh.rustup.rs -sSf | sh -s -- -y
	/bin/zsh && source /home/codespace/.cargo/env
	rustc --version
	rustup target add riscv64gc-unknown-none-elf