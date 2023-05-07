import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import style from './ItemList.module.css'
import Link from 'next/link'


export default function ItemList({ list }) {
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => (                        
                        // eslint-disable-next-line react/jsx-key                        
                        <Grid.Column>
                            <Link href={{ pathname: '/view/[id]', query: { id: item.id } }} as={'/view/[id]'} >
                                    <div className={style.wrap}>
                                        <Image 
                                            src={item.image_link} 
                                            alt={item.name}
                                            className={style.img_item}
                                        />
                                        <strong className={style.tit_item}>{item.name}</strong>
                                        <span className={style.txt_info}>
                                            {item.category} {item.product_type}
                                        </span>
                                        <strong>${item.price}</strong>
                                    </div>
                            </Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}
