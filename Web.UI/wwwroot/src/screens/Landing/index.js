import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../controls';
import { Doughnut, Bar, Pie } from 'react-chartjs-2';

const Landing = () => {
    const history = useHistory();
    const loader = () => history.push('/loading');
    const jybLoader = () => history.push('/jyb-loading');

    const datasets = [

        {
            label: "Budgeted",
            data: [50, 30, 20],
            backgroundColor: '#10316b',
        },
        {
            label: "Actual",
            data: [47.3, 2.3, 9.8],
            backgroundColor: '#e84a5f',
            //'#99b898',
            //'#e84a5f',

        },
    ]

    //const datasets = [
    //{
    //data: [50, 47.86, 30, 2.15, 20, 9.38],
    //backgroundColor: [
    //'#10316b',
    //'#e84a5f',
    //'#99b898',
    //],
    //borderColor: [
    //'rgba(143, 207, 209,.25)',
    //'rgba(232, 74, 95,.25)',
    //'rgba(0, 50, 178,.25)',
    //],
    //borderWidth: 1,
    //padding: 30,
    //color: '#fff'
    //}
    //]

    const data = {
        labels: ['Necessities', 'Wants', 'Savings/Debt'],
        datasets: datasets
    }

    const options = {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 100,
                fontSize: 25,
                padding: 30,
                fontColor: '#fff',
            }
        },
        title: {
            position: 'bottom',
            fontSize: 50,
        }

    }
    return (
        <div className="landing">

            <div className="chart">
                <Bar data={data} options={options} />
            </div>
            {
                //</div><Button
                //</div>content="View Loader"
                //</div>className="primary"
                //</div>onClick={loader} />

                //</div><Button
                //</div>content="View JYB Loader"
                //</div>className="primary"
                //</div>onClick={jybLoader} />
                //</div>
            }
        </div>
    )
}

export default Landing;