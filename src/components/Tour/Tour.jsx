import React from 'react';
import styles from './Tour.module.scss'

import watch from '../../assets/img/watch.svg'
import check_mark from '../../assets/img/check_mark.svg'
import ruble_bold from '../../assets/img/ruble_bold.svg'

const Tour = ({obj}) => {
    let arr = []

    const [more, setMore] = React.useState(false)

    const [arr_dom_element, set_arr_dom_element] = React.useState([])

    React.useEffect(() => {
        arr = []

        if(more) {
            obj.arr_time.map((element, index) => [
                arr.push(<button key={`arr_time` + index}>
                    {element}
                </button>)
            ])
        } else {
            if(obj.arr_time.length > 4) {
                for(let i = 0; i < 3; i++) {
                    arr.push(<button key={`arr_time` + i}>
                        {obj.arr_time[i]}
                    </button>)
                }
                
                arr.push(<button key={`arr_time3`} onClick={() => setMore(true)}>
                    {'еще...'}
                </button>)
            } else {
                obj.arr_time.map((element, index) => [
                    arr.push(<button key={`arr_time` + index}>
                        {element}
                    </button>)
                ])
            }
        }

        set_arr_dom_element(arr)
    }, [more])

    

    return (
        <div className={styles.tour}>
            <div className={styles.left_block}>
                <div className={`tour_type ${obj.type.color}`}>
                    <p>
                        {obj.type.type}
                    </p>
                </div>

                <img src={obj.picture} alt="" />
            </div>

            <div className={styles.right_block_border}>
                <div className={styles.right_block}>
                    <h1 className={obj.name_tour}>
                        {obj.name_tour}
                    </h1>

                    <div className={styles.length_time}>
                        <img src={watch} alt="" />

                        <p>
                            {obj.length_time}
                        </p>
                    </div>

                    <div className={styles.tour_options}>
                        <div>
                            <img src={check_mark} alt="" />

                            <p>Билет на целый день</p>
                        </div>

                        <div>
                            <img src={check_mark} alt="" />

                            <p>Неограниченное число катаний</p>
                        </div>

                        <div>
                            <img src={check_mark} alt="" />

                            <p>6 остановок у главных достопримечательностей</p>
                        </div>

                        <div className={styles.time_block}>
                            <img src={check_mark} alt="" />

                            <div className={styles.time}>
                                <p>
                                    Ближайший рейс сегодня
                                </p>

                                <div>
                                    {arr_dom_element}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.price}>
                            <div className={`${styles.ruble_bold} ${!obj.price_mooring && (styles.center)}`}>
                                <p>
                                    {obj.price}
                                </p>
                                
                                <img src={ruble_bold} alt="" />
                            </div>


                            {
                                obj.price_mooring && (
                                    <div className={styles.ruble_light}>
                                        <div className={styles.ruble_light_price}>
                                            <p className={styles.ruble_light_number}>
                                                {obj.price_mooring}
                                            </p>
                                            
                                            <img src={ruble_bold} alt="" />
                                        </div>

                                        <p>
                                            на причале
                                        </p>
                                    </div>
                                )
                            }
                        </div>

                        <button className={styles.more}>
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;
