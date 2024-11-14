export const Languages = () => {
    return (
        <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
                <label className="flex flex-row text-gray-700 text-sm font-medium mb-1" htmlFor="header">
                    Language
                </label>
                <select
                    id="language"
                    name="language"
                    className="mt-1 block w-full md:w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:none sm:text-sm text-gray-700 mb-2"
                >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                    <option value="nl">Nederlands</option>
                    <option value="pl">Polski</option>
                    <option value="fr">Français</option>
                    <option value="nb">Norwegian</option>
                    <option value="ro">Românesc</option>
                    <option value="ru">Русский</option>
                    <option value="pt-br">Português (Brazil)</option>
                    <option value="cs">Česky</option>
                    <option value="ja">日本語</option>
                    <option value="it">Italian</option>
                    <option value="sv">Swedish</option>
                    <option value="fi">Suomi</option>
                </select>
            </div>
        </div>


    )
}