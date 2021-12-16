import { useState, useRef } from 'react'
import { UIButton } from '../../design/button';
import { UIInput } from '../../design/input';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import * as S from './style';

interface Props {
    funcModal:(e:boolean) => void
}

const RequestMeeting:React.FC<Props> = ({funcModal}) => {

    const inputNumberRef  = useRef<HTMLInputElement>(null);
    const inputNameRef  = useRef<HTMLInputElement>(null);

    const [ statusNumber, setStatusNumber ] = useState<boolean>();
    const [ statusName, setStatusName ] = useState<boolean>();
    const [ phone, setPhone ] = useState("");
    const [ modalError, setModalError ] = useState(false);

    let data = {name:'', number:''}

    const validateNumberPhone = (input:any) => {
        if(input?.value.length !== 15){
            input!.style.color = 'var(--red)';
            input!.style.borderColor = 'var(--red)'; 
            setStatusNumber(false);
        }   
        else {
            input!.style.color = 'var(--green)';
            input!.style.borderColor = 'var(--green)';
            setStatusNumber(true);
        }
    }
    
    const validateName = (input:any) => {
        if(input?.value.length !== 0){
            input!.style.color = 'var(--green)';
            input!.style.borderColor = 'var(--green)';
            setStatusName(true);
        }else {
            input!.style.color = 'var(--red)';
            input!.style.borderColor = 'var(--red)'; 
            setStatusName(false);
        }
    }
    
    const maskPhone = (value:any) => {
        return value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2")
          .replace(/(-\d{4})(\d+?)$/, "$1");
      };

      

    return(
        <S.ContainerRequest>
            <div >
                <h3>Mande um oi, ligamos para você!</h3>
                <p>Preencha seus dados para que a gente possa entrar em contato.</p>
                <S.userInteraction>
                    <aside>
                        <label htmlFor="input-name">Nome completo</label>
                        <UIInput 
                            id="input-name" 
                            type="text"
                            ref={inputNameRef} 
                            placeholder="Ex: Mateus Ávila Isidoro"
                            onBlur={() => validateName(inputNameRef.current)}
                        />
                        {
                            statusName === true 
                            ? (<S.Verified><AiFillCheckCircle /></S.Verified>)
                            : (<></>) 
                        }
                        {
                            statusName === false 
                            ? (<S.Denied><AiFillCloseCircle /></S.Denied>)
                            : (<></>)
                        }
                    </aside>
                    <aside>
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <UIInput 
                            id="whatsapp" 
                            type="text" 
                            placeholder="(99) 99999-9999"
                            maxLength={15}
                            ref={inputNumberRef}
                            value={phone}
                            onChange={(e) => {
                                setPhone(maskPhone(e.target.value))
                                validateNumberPhone(inputNumberRef.current);

                            }}
                        />
                        {
                            statusNumber === true 
                            ? (<S.Verified><AiFillCheckCircle /></S.Verified>)
                            : (<></>) 
                        }
                        {
                            statusNumber === false 
                            ? (<S.Denied><AiFillCloseCircle /></S.Denied>)
                            : (<></>)
                        }
                    </aside>
                    <UIButton color={'var(--green)'} width={'280px'} 
                    onClick={() => {
                        if(statusName === true && statusNumber === true){
                            setModalError(false);
                            data.name = inputNameRef.current!.value;
                            data.number = inputNumberRef.current!.value;
                            console.log(data)
                            funcModal(true);
                            window.scrollTo(0, 0);
                        } else {
                            setModalError(true);
                        }
                    }}
                    >Peça uma reunião</UIButton>
                </S.userInteraction>
                {
                modalError 
                ? (<S.ModalError><p>Por favor, revise seus dados</p></S.ModalError>)
                : (<></>)
            }
            </div>
            
        </S.ContainerRequest>
    )
}

export default RequestMeeting;