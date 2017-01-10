import React, { Component } from 'react';

class ManageComplexData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hermanos: [
                {nombre: 'Mariau', edad: 46, profesion: 'abogado', hijos: [{nombre: 'Javier'}, {nombre: 'Jacobo'}, {nombre: 'Belen'}], sexo: 'F'},
                {nombre: 'Julio', edad: 45, profesion: 'emprendedor', hijos: [], sexo: 'M'},
                {nombre: 'Belen', edad: 43, profesion: 'abogado', hijos: [{nombre: 'Jaime'}, {nombre: 'Quique'}], sexo: 'F'},
                {nombre: 'Lourdes', edad: 41, profesion: 'abogado', hijos: [{nombre: 'Nacho'}, {nombre: 'Pablo'}], sexo: 'F'},
                {nombre: 'Blanca', edad: 33, profesion: 'medico', hijos: [], sexo: 'F'},
                {nombre: 'Ana', edad: 30, profesion: 'publicista', hijos: [], sexo: 'F'},
            ]
        };
        this.listItems = this.listItems.bind(this);
        this.sumItems = this.sumItems.bind(this);
        this.filtrarHermanas = this.filtrarHermanas.bind(this);
        this.encontrarPrimera = this.encontrarPrimera.bind(this);
        this.listHijos = this.listHijos.bind(this);
    }

    listHijos(hermano) {
        return hermano.hijos.map(hijo => {
            return (
                <li key={hijo.nombre}>{hijo.nombre}</li>
            );
        });
    }

    listItems() {
        return this.state.hermanos.map(hermano => {
            return (
                <div>
                    <li key={hermano.nombre}>{hermano.nombre}</li>
                    <ul>
                        {this.listHijos(hermano)}
                    </ul>
                </div>
            );
        })
    }

    sumItems() {
        return this.state.hermanos.reduce((sum, hermano) => {
          return (sum + hermano.hijos.length)}, 0)
    }

    filtrarHermanas() {
        function isWoman(hermano) {
            return (hermano.sexo === 'F');
        }
        const filtered = this.state.hermanos.filter(isWoman);
        return filtered.map(hermana => {
                return (
                    <li key={hermana.nombre}>{hermana.nombre}</li>
                );
            }
        );
    }

    encontrarPrimera() {
        const filtro = function(hermano) {
            return (hermano.sexo === 'F');
        };

        const primera = this.state.hermanos.find(filtro);

        return (<li key={primera.nombre}>{primera.nombre}</li>);

    }

    render() {
        return (
            <div>
                <p><strong>Managing <span style={{color: 'orange'}}>Complex</span> Data.</strong></p>
                <p>Operations:</p>
                <ul>
                    <li>List items (map).</li>
                    <li>Sum items (reduce).</li>
                    <li>Filter items (filter).</li>
                    <li>Find first item (find).</li>
                </ul>
                <div>
                    <p><strong>List items <span style={{color: 'orange'}}>and its children</span> (two map embeded)</strong></p>
                    <p>Remember to invoke the function to return the output.</p>
                    <ul>
                        {this.listItems()}
                    </ul>
                </div>
                <div>
                    <p><strong>Sum items (reduce)</strong></p>
                    <p>Remember to invoke the function to return the output.</p>
                    <ul>
                        <li>Numero total de hijos: <span style={{color: 'blue'}}>{this.sumItems()}</span></li>
                    </ul>
                </div>
                <div>
                    <p><strong>Filter items (filter).</strong></p>
                    <p>Remember to invoke the function, create a filtro function to be used in the filter operation, and map the filtered results.</p>
                    <ul>
                        <li>Filtrar solo las hermanas:</li>
                        {this.filtrarHermanas()}
                    </ul>
                </div>
                <div>
                    <p><strong>Find first item (find).</strong></p>
                    <p>Remember to invoke the function, create a filtro function to be used in the find operation and return the result.</p>
                    <ul>
                        <li>Encontrar la primera hermana:</li>
                        {this.encontrarPrimera()}
                    </ul>
                </div>



            </div>
        )
    }

}

export default ManageComplexData;
