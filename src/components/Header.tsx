

export default function Header ({image} : {image: {src: string; alt:string} }) {
    return <>
        <p>This is my image</p>
        <img src={image.src} alt={image.alt} /> 
    </>


}