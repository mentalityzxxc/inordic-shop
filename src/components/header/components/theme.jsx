/**
 * Компонент для переключения темы
 * 
 * @returns Component
 */
export function Theme({setTheme, text}){
    return (
        <div>
            <input 
                type="radio" 
                id="light" name="theme" 
                value="light" 
                defaultChecked
                onClick={() => setTheme('light')}
            />
            <label for="light">{text.Light}</label>
            <input 
                type="radio" 
                id="dark" name="theme" 
                value="dark"
                onClick={() => setTheme('dark')}
            />
            <label for="dark">{text.Dark}</label>
        </div>
    )
}