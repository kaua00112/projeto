import {Children, ReactNode} from 'react';

type Props = {
    title?: string;
    children: ReactNode;

}

export const Music =({title, children}: Props) => {
    return(
        <>
            {children}
                <h1>{title}</h1>
                <h4>As mais tocadas</h4>

                <ol>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                    <li>musica</li>
                </ol>
        </>
    );
}