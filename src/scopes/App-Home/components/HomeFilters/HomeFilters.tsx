import { useFetcher } from "@remix-run/react"
import { Joke } from '@/routes/api.joke'
import { JokeCard } from '@/scopes/App-Home/components/JokeCard/JokeCard'

export const HomeFilters = () => {
    const fetcher = useFetcher<Joke | undefined>()
    const data = fetcher.data

    return (
        <>
            <div className="border rounded-xl px-4 py-2 mt-6">
                <h1>Конфигуратор шутки</h1>
                <div>
                    <div>

                        <div className="flex">
                            <label htmlFor="category">Выберите категорию / категории:</label>
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
                            <label htmlFor="flags">Флаги для черного списка (опционально):</label>
                            <div id="flags" className="flex">

                                <label><input type="checkbox" id="nsfw"/> NSFW</label><br/>

                                <label><input type="checkbox" id="religious"/> Религиозные</label><br/>

                                <label><input type="checkbox" id="political"/> Политические</label><br/>

                                <label><input type="checkbox" id="racist"/> Расистские</label><br/>

                                <label><input type="checkbox" id="sexist"/> Сексистские</label><br/>

                                <label><input type="checkbox" id="explicit"/> Эксплицитные</label><br/>

                            </div>
                        </div>

                        <div className="flex">
                            <label id="response-format">Выберите формат ответа:</label>
                            <div>
                                <label><input type="radio" name="response-format" id="json" checked/>JSON</label>

                                <label><input type="radio" name="response-format" id="xml"/>xml</label>

                                <label><input type="radio" name="response-format" id="yaml"/>yaml</label>

                                <label><input type="radio" name="response-format" id="text"/>plain text</label>

                            </div>
                        </div>

                        <div className="flex">
                            <label htmlFor='type-joke'>Выберите хотя бы один тип шутки:</label>
                            <div>

                                <label><input type="checkbox" id="single"/>одиночная</label>

                                <label><input type="checkbox" id="twopart"/>двойная</label>

                            </div>
                        </div>

                        <div className="flex">
                            <label>Найдите шутку, которая содержит это слово:</label>
                            <input type="textarea" className="border"/>
                        </div>

                        <label htmlFor="">Поиск шутки в этом диапазоне идентификаторов:</label>

                    </div>

                    <button className="px-4 py-2 text-lg border rounded-xl hover:bg-gray-100 mt-4 font-medium" onClick={() => fetcher.load('api/joke')}>Пошутить</button>
                    <p className="mt-6">ID: {data?.id}</p>
                </div>
            </div>

            {data && (
                <JokeCard data={data}/>
            )}
        </>
    )
}
