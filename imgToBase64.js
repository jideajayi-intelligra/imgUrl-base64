export const imgUrlToBase64 = async (url, removeDataPrefix = false) => {
    const img = await fetch(url);
    const imgBlob = await img.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            let base64Str = reader.result;
            if(removeDataPrefix) {
                base64Str = base64Str.replace("data:", "").replace(/^.+,/, "");
            }
            resolve(base64Str);
        };
        reader.onerror = reject;
        reader.readAsDataURL(imgBlob);
    });
};
