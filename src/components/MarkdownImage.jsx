export default function MarkdownImage({alt,src,width,height}){
	return <img alt={alt||"An Image"} src={src} width={width||400} height={height||400} />
}