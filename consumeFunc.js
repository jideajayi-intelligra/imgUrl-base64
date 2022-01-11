import { imgUrlToBase64 } from "./imgToBase64";

(async () => {
    const imgBase64 = await imgUrlToBase64("https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png");
    console.log(imgBase64);
})();
