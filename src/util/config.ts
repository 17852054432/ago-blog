interface Config {

}
interface VueConfig {
    [key: string]: any;
    silent?: Boolean; // 取消 Vue 所有的日志与警告。
}
// 其他配置
const config: Config = {

}
export {config}