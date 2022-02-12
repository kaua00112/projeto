import {Children, ReactNode} from 'react';

type Props ={
    
    link?: string;
    children: ReactNode;

}

export const List  = ({ link, children}: Props) => {
    let musiclist: string = 'src\components\Band.tsx';

    return(
        <>
        {children}
        <a href={musiclist}><h1>Djavú</h1></a>
        <h4>TOP DO MOMENTO</h4>
        </>
    );
    
}