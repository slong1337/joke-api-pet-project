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
                    <div className="">
                        <div className="flex">
                            <label id="category">Выберите категорию / категории:</label>

                            <select id="category" >

                                <option value="Misc">Без разницы</option>

                                <option value="Programming">Программирование</option>

                                <option value="Misc">Разное</option>

                                <option value="Dark">Тёмный юмор</option>

                                <option value="Pun">Игра слов</option>

                                <option value="Spooky">Страшные</option>

                                <option value="Christmas">Рождественские</option>

                            </select>

                        </div>

                        <div className="flex">
                            <label id="flags">Флаги для черного списка (опционально):</label>

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

                            <label id='type-joke'>Выберите хотя бы один тип шутки:</label>
                                <div>

                                    <label><input type="checkbox" id="single"/>одиночная</label>

                                    <label><input type="checkbox" id="twopart"/>двойная</label>

                                </div>

                        </div>

                        <div className="flex">

                            <label>Найдите шутку, которая содержит это слово:</label>

                            <input type="textarea" className="border"/>

                        </div>

                        <div className="flex">

                            <label id="">Поиск шутки в диапазоне</label>
                            <p>От</p>
                            <input type="number" className=" border " />
                            <p>До</p>
                            <input type="number" className=" border " />

                        </div>

                        <label id="">Количество шуток</label>
                        <input type="number" min="1"/>

                        

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
