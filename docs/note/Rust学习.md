# 这就是Rust
## 基础
1. Rust 项目主要分为两个类型：bin 和 lib，前者是一个可运行的项目，后者是一个依赖库项目
   - cargo new world_hello 创建一个新项目
   - 有两种方式可以运行项目
     - cargo run 首先对项目进行编译，然后再运行，因此它实际上等同于运行了两个指令
     - cargo build 手动编译和运行项目
       - ./target/debug/world_hello
         - 运行的是 debug 模式，在这种模式下，代码的编译速度会非常快，可是福兮祸所伏，运行速度就慢了。 原因是，在 debug 模式下，Rust 编译器不会做任何的优化，只为了尽快的编译完成，让你的开发流程更加顺畅。
     - cargo run --release 高性能运行代码
     - cargo build --release
       - ./target/release/world_hello

2. 检查项目 cargo check
   - cargo check 是我们在代码开发过程中最常用的命令，它的作用很简单：快速的检查一下代码能否编译通过。因此该命令速度会非常快，能节省大量的编译时间。
   - Rust 虽然编译速度还行，但是还是不能与 Go 语言相提并论，因为 Rust 需要做很多复杂的编译优化和语言特性解析，甚至连如何优化编译速度都成了一门学问: 优化编译速度。

3. Cargo.toml 和 Cargo.lock
   - Cargo.toml 和 Cargo.lock 是 cargo 的核心文件，它的所有活动均基于此二者。
   - Cargo.toml 是 cargo 特有的项目数据描述文件。它存储了项目的所有元配置信息，如果 Rust 开发者希望 Rust 项目能够按照期望的方式进行构建、测试和运行，那么，必须按照合理的方式构建 Cargo.toml。
    ```bash
        [package]
        name = "world_hello"  # 项目名称
        version = "0.1.0"  # 当前版本，新项目默认是 0.1.0
        edition = "2021" # 定义了我们使用的 Rust 大版本
    ```
   - Cargo.lock 文件是 cargo 工具根据同一项目的 toml 文件生成的项目依赖详细清单，因此我们一般不用修改它，只需要对着 Cargo.toml 文件撸就行了。
   - 当你的项目是一个可运行的程序时，就上传 Cargo.lock，如果是一个依赖库项目，那么请把它添加到 .gitignore 中。

4. 定义项目依赖
   - 使用 cargo 工具的最大优势就在于，能够对该项目的各种依赖项进行方便、统一和灵活的管理。
   - 在 Cargo.toml 中，主要通过各种依赖段落来描述该项目的各种依赖项：
    ```bash
        [dependencies]
        rand = "0.3"
        hammer = { version = "0.5.0"} # 基于 Rust 官方仓库 crates.io，通过版本说明来描述
        color = { git = "https://github.com/bjz/color-rs" } # 基于项目源代码的 git 仓库地址，通过 URL 来描述
        geometry = { path = "crates/geometry" } # 基于本地项目的绝对路径或者相对路径，通过类 Unix 模式的路径来描述
    ```
