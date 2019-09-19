import React, {Component} from 'react';
import './../../styles/footer.component.scss'
export default class FooterComponent extends Component {
    render() {
        return (
            <div className="footer">
                <hr/>
                <div className="cordinates-container row">
                    <p className="el-media col-6">
                        <strong>Съвет за електронни медии</strong><br/>
                        Адрес: гр. София, бул. “Шипченски проход” 69<br/>
                        тел: 02/ 9708810<br/>
                        факс: 02/ 9733769<br/>
                        е-mail:office@cem.bg</p>
                    <p className="address col-6"><strong>Доставчик на медийната услуга</strong><br/>
                        РТЕ Нет &nbsp;ООД<br/>
                        Адрес: гр. София 1124, ул. Николай В. Гогол, № 6<br/>
                        тел: 02/ 957-957-5<br/>
                        traffic@avtoradio.bg <br/>
                    </p>
                </div>
            </div>
        )
    }
}
