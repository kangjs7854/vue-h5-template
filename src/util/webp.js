const webp = function (imgUrl) {
	if(!imgUrl || imgUrl.indexOf('data:image')>-1) return imgUrl;
	let width = parseInt(window.screen.width*window.devicePixelRatio) || 750;
	let imgStr = `?imageView2/2/w/${width}`;
	if(tool.supportWebpFlag){
		imgStr += '/format/webp';
	}
	let path = imgUrl.split('?')[0] + imgStr;
	return path
}
export {
	webp
}