export function Form() {
    return (
        <div>
            <h1>Конфигуратор шутки</h1> 
                <div>
                    <div>
                        <form action="">
                            <div className="flex">
                                <label for="category">Выберите категорию / категории:</label>
                                    <select id="category" multiple>

                                        <option value="Programming">Программирование</option>
                                        
                                        <option value="Misc">Разное</option>

                                        <option value="Dark">Тёмный юмор</option>

                                        <option value="Pun">Игра слов</option>

                                        <option value="Spooky">Страшные</option>

                                        <option value="Christmas">Рождественские</option>

                                    </select>

                                </div>
                                    <div className="flex">
                                        <label for="flags">Флаги для черного списка (опционально):</label>
                                            <div id="flags" className="flex">

                                                <label><input type="checkbox" id="nsfw" /> NSFW</label><br />

                                                <label><input type="checkbox" id="religious" /> Религиозные</label><br />

                                                <label><input type="checkbox" id="political" /> Политические</label><br />

                                                <label><input type="checkbox" id="racist" /> Расистские</label><br />

                                                <label><input type="checkbox" id="sexist" /> Сексистские</label><br />

                                                <label><input type="checkbox" id="explicit" /> Эксплицитные</label><br />

                                            </div>
                                    </div>

                                    <div className="flex">
                                        <label id="response-format">Выберите формат ответа:</label>
                                            <div>
                                                <label><input type="radio" name="response-format" id="json" checked />JSON</label>

                                                <label><input type="radio" name="response-format" id="xml" />xml</label>

                                                <label><input type="radio" name="response-format" id="yaml" />yaml</label>

                                                <label><input type="radio" name="response-format" id="text" />plain text</label>

                                            </div>
                                    </div>

                                    <div className="flex">
                                        <label for='type-joke'>Выберите хотя бы один тип шутки:</label> 
                                            <div>

                                                <label><input type="checkbox" id="single" />одиночная</label>

                                                <label><input type="checkbox" id="twopart"/>двойная</label> 

                                            </div>
                                    </div>

                                    <div className="flex">
                                        <label>Найдите шутку, которая содержит это слово:</label>
                                            <input type="textarea" className=" " />
                                    </div>

                                    <label htmlFor="">Поиск шутки в этом диапазоне идентификаторов:</label>

                        </form>
                    </div>
                </div>       
        </div>
    )
}