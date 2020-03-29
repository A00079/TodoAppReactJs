import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class YourHero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HeroName: '',
            HeroStats: [],
            HeroPowerStat: [],
            chartData: {
                labels: ['Boston', 'Lowell', 'New', 'old'],
                datasets: [
                    {
                        label: 'HeroStats',
                        data: [],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 159, 152, 0.6)',
                            'rgba(255, 129, 162, 0.6)',
                            'rgba(255, 239, 182, 0.6)',
                            'rgba(255, 219, 122, 0.5)',
                            'rgba(255, 249, 172, 0.4)'
                        ]
                    }
                ]
            },
            pieChart:{
                labels: [],
                  datasets: [
                      {data: [],
                    backgroundColor: [
                    'rgba(255, 99, 142, 0.1)',
                    'rgba(255, 159, 122, 0.2)',
                    'rgba(255, 129, 172, 0.3)',
                    'rgba(255, 239, 182, 0.5)',
                    '#FF8421',
                    '#FF8945'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF7495',
                    '#FF8421',
                    '#FF8945'
                    ]
                  }]
            }
        }
    }
    componentWillMount() {
        let randomNum = Math.abs(Math.floor(Math.random() * (1 - 100) + 1));
        console.log('Random Num', randomNum);
        fetch('https://www.superheroapi.com/api.php/2292688641032311/' + randomNum)
            .then(Rawdata => Rawdata.json())
            .then(data => {
                if (data.response === 'success') {
                    this.setState({ HeroName: data.name })
                    this.setState({ HeroPowerStat: data.powerstats })
                    let pielabels = [];
                    let pielabels_value = [];
                    Object.keys(this.state.HeroPowerStat).map((key, index) => {
                        pielabels.push(key)
                        pielabels_value.push(this.state.HeroPowerStat[key])
                    })
                    var pieChart = {...this.state.pieChart} 
                    let barGraph = {...this.state.chartData}
                    console.log("pielabels Value Arry",pielabels_value)

                    pieChart.labels = [...pielabels];
                    barGraph.labels = [...pielabels];

                    barGraph.datasets[0].data = [...pielabels_value];
                    pieChart.datasets[0].data = [...pielabels_value];
                    this.setState({ pieChart : pieChart})
                    this.setState({ chartData:barGraph})
                    console.log("Pie Labels",this.state.pieChart)

                } else {
                    console.error("Error Fetching...",)
                }
            }).catch(err =>{
                console.log("Superhero err",err)
            })
    }
    render() {
        const herolist = {
            'wordBreak': 'normal',
            'textTransform': 'uppercase',
            'background': 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
            'WebkitBackgroundClip': 'text',
            'WebkitTextFillColor': 'transparent',
            'fontWeight': 'bolder',
            'backgroundColor': '#2a2a72 !important',
            'backgroundImage': 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%) !important',
            'padding': '10px',
            'lineHeight': '2.3',
            'fontSize': '3vw',
            'letterSpacing': '1px'
        };
        const stats = {
            'paddingLeft': '70px',
            'wordBreak': 'normal',
            'textTransform': 'uppercase',
            'background': 'linear-gradient(to left, #30CFD0 80%, #330867 100%)',
            'WebkitBackgroundClip': 'text',
            'WebkitTextFillColor': 'transparent',
            'fontWeight': 'bolder',
            'backgroundColor': '#2a2a72 !important',
            'backgroundImage': 'linear-gradient(15deg, #2a2a72 100%, #009ffd 14%) !important',
        }
        const Graph = {
            'width': '50%',
            'height': '50%',
            'marginTop': '5%',
            'display': 'inline-block'
        }
        return (
            <div>
                <h3 align="center"><span style={herolist}>{this.state.HeroName}</span></h3>
                <table>
                    <tbody>
                        <tr>
                            {
                                Object.keys(this.state.HeroPowerStat).map((key, index) => {
                                    return <th key={index} style={stats}>{key}</th>
                                })
                            }
                        </tr>
                        <tr>
                            {
                                Object.keys(this.state.HeroPowerStat).map((keyy, indexx) => {
                                    return <td key={indexx} style={stats}>{this.state.HeroPowerStat[keyy]}</td>
                                })
                            }
                        </tr>
                    </tbody>
                </table>
                <div style={Graph}>
                    <Bar
                        data={this.state.chartData}
                        options={{}}
                    />
                </div>
                <div style={Graph}>
                    <Pie
                        data={this.state.pieChart}
                        options={{}}
                    />
                </div>
            </div >
        )
    }
}

export default YourHero;