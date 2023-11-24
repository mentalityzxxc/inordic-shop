import logoInordic from '../../../assets/logo.png'

/**
 * Компонент логотипа в шапке
 * 
 * @returns component
 */
export function Logo(){
    return (
        <div className='logo-container'>
            <img 
                src={logoInordic} 
                alt="Логотип Inordic" 
            />
        </div>
    )
}