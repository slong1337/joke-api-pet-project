import { useLoaderData } from "@remix-run/react"
import { JokeCard } from '@/scopes/App-Home/components/JokeCard/JokeCard'
import useCriteria from '@/hooks/useCriteria'
import clsx from 'clsx'
import { clientLoader } from '@/scopes/App-Home/leaves/Home.loader'
import { useState } from "react"

export const HomeFilters = () => {
    const { setCriteria, resetCriteria, getCriteria } = useCriteria()
    const [selectedCategory, setSelectedCategory] = useState<string>('Any')
    const data = useLoaderData<typeof clientLoader>()


    const onTypeFilter = (value: string) => {
        if (value === '') {
            resetCriteria('type')
        } else {
            setCriteria('type', value)
        }
    }

    const onCategoryFilter = (value: string) => {
        if (value === '') {
            resetCriteria('category')
        } else {
            setCriteria('category', value)
        }
    }


    return (
        <>
            <div className="border rounded-xl px-4 py-2 mt-6">
                <h1 className="text-3xl">Конфигуратор шутки</h1>

                <div>
                    <div className="">
                        <div className="flex my-6 gap-x-4 items-center">
                            <label id="category">Выберите категорию / категории:</label>

                            <div id="category" >

                                <button value="Misc" className="px-2 mx-2 border rounded-lg hover:bg-gray-50">Без разницы</button>

                                <button value="Programming" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Programming'
                                })}
                                onClick={() => onCategoryFilter ('Programming')}>Программирование</button>

                                <button value="Misc" className="px-2 mx-2 border rounded-lg hover:bg-gray-50">Разное</button>

                                <button value="Dark" className="px-2 mx-2 border rounded-lg hover:bg-gray-50">Тёмный юмор</button>

                                <button value="Pun" className="px-2 mx-2 border rounded-lg hover:bg-gray-50">Игра слов</button>

                                <button value="Spooky" className="px-2 mx-2 border rounded-lg hover:bg-gray-50">Страшные</button>

                                <button value="Christmas" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Christmas'
                                })}
                                onClick={() => onCategoryFilter ('Christmas')}>Рождественские</button>

                            </div>

                        </div>

                        <div className="flex my-6 gap-x-4 items-center">
                            <label id="flags">Черный список:</label>

                            <div id="flags" className="flex">

                                <button className="px-2 mx-2 border rounded-lg hover:bg-gray-50 text-sm" id="nsfw"> NSFW</button>

                                <button className="px-2 mx-2 border rounded-lg hover:bg-gray-50 text-sm" id="religious"> Религиозные</button>

                                <button className="px-2 mx-2 border rounded-lg hover:bg-gray-50 text-sm" id="political"> Политические</button>

                                <button className="px-2 mx-2 border rounded-lg hover:bg-gray-50 text-sm" id="racist"> Расистские</button>

                                <button className="px-2 mx-2 border rounded-lg hover:bg-gray-50 text-sm" id="sexist"> Сексистские</button>

                                <button className="px-2 mx-2 border rounded-lg hover:bg-gray-50 text-sm" id="explicit"> Эксплицитные</button>

                            </div>

                        </div>

                        <div className="flex my-6 gap-x-4 items-center">

                            <div>Выберите хотя бы один тип шутки:</div>

                            <button 
                                className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('type') === 'any'
                                })}
                                onClick={() => onTypeFilter('any')}>
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

                            {/*<label><input className="" id="single"/>одиночная</label>*/}

                            {/*<label><input className="" id="twopart"/>двойная</label>*/}


                        </div>

                        <div className="flex items-center">

                            <label>Найдите шутку, которая содержит это слово:</label>

                            <input type="textarea" className="border rounded-md my-2 mx-4"/>

                        </div>

                        <div className="flex my-4">

                            <label id="" className="mr-4">Поиск шутки в диапазоне:</label>
                            <p>От</p>
                            <input type="number" className=" border rounded-md mx-4 " min={1}/>
                            <p>До</p>
                            <input type="number" className=" border rounded-md mx-4 " max={1367}/>

                        </div>

                        <label id="">Количество шуток</label>
                        <input type="number" min={10} max={1367} className="mx-4 border rounded-md"/>

                        

                    </div>

                </div>
            </div>

            {data && (
                <JokeCard data={data}/>
            )}
        </>
    )
}
