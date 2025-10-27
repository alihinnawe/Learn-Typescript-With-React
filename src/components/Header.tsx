
import { type ReactNode } from 'react';
  type imageProps = {

        image: {src: string; alt:string},
        children: ReactNode
  }


export default function Header ({image, children} : imageProps ) {

    return <>
        <p>This is my image</p>
        <img {...image} />
        {children}
    </>


}