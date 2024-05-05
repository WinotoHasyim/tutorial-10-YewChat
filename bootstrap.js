import init from "./pkg/yewchat";

init().then(module => {
    module.run_app().catch(console.error);
});