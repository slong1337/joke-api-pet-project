import { useLoaderData } from "@remix-run/react"
import { JokeCard } from '@/scopes/App-Home/components/JokeCard/JokeCard'
import useCriteria from '@/hooks/useCriteria'
import clsx from 'clsx'
import { clientLoader } from '@/scopes/App-Home/leaves/Home.loader'

export const HomeFilters = () => {
    const { setCriteria, resetCriteria, getCriteria } = useCriteria()
    const data = useLoaderData<typeof clientLoader>()

    const onTypeFilter = (value: string) => {
        if (value === '') {
            resetCriteria('type')
        } else {
            setCriteria('type', value)
        }
    }

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

                        <div className="flex my-6 gap-x-4 items-center">

                            <div>Выберите хотя бы один тип шутки:</div>

                            {/*todo:добавить стилизацию по примеру из singel*/}
                            <button className="px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm" onClick={() => onTypeFilter('')}>
                                Все
                            </button>

                            <button
                                className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('type') === 'single'
                                })}
                                onClick={() => onTypeFilter('single')}
                            >
                                Одиночные
                            </button>

                            <button
                                onClick={() => onTypeFilter('twopart')}
                                className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('type') === 'twopart'
                                })}
                            >
                                Двойные
                            </button>

                            {/*<label><input type="checkbox" id="single"/>одиночная</label>*/}

                            {/*<label><input type="checkbox" id="twopart"/>двойная</label>*/}


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

                </div>
            </div>

            {data && (
                <JokeCard data={data}/>
            )}
        </>
    )
}
