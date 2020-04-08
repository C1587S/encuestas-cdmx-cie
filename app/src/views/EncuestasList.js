import React from 'react';
import { Container } from 'reactstrap';

import withView from 'decorators/withView';

const exampleEncuestas = [
    { id: 1,
      name: 'sebastian cadavid sanchez',
      dependencia: 'cie',
      p2_name_jefe: 'mauricio romero',
      p2_dependencia_jefe: 'cie',
      p2_name_pers1: 'paola mejia',
      p2_dependencia_pers1: 'cie',
      p2_name_pers2: 'ingrid arbeláez',
      p2_dependencia_pers2: 'itam',
      p2_name_pers3: 'pedro Infante',
      p2_dependencia_pers3: 'itam',
      p2_name_pers4: 'ana palacios',
      p2_dependencia_pers4: 'cdep',
      p2_name_pers5: 'ingrid londoño',
      p2_dependencia_pers5: 'edep',
      p3_salario_jefe: '10',
      p3_salario_pers1: '1',
      p3_salario_pers2: '2',
      p3_salario_pers3: '3',
      p3_salario_pers4: '4',
      p3_salario_pers5: '5',
      p4_salario_jefe: '10',
      p4_salario_pers1: '1',
      p4_salario_pers2: '2',
      p4_salario_pers3: '3',
      p4_salario_pers4: '4',
      p4_salario_pers5: '5',
      p5_cantidad: '1',
      p6_cantidad: '33',
      p7_probabilidad: '0.4',
      p8_cantidad: '2',
      p9_probabilidad: '0.5',
      p10_cantidad: '1',
      p11_salario: '2',
      p12_probabilidad1: '0.4',
      p12_probabilidad2: '0.6',
      p13_incomodo: 'si',
      p13_esprta: 'si',
      p13_aceptable: 'si'
    },

];

const EncuestasList = () => (
    <Container>
        <h1>Lista de encuestas de la CDMX</h1>
        <ul>
            {exampleEncuestas.map((encuesta) => (
                <li key={encuesta.id}>
                    <a href={encuesta.id}>{encuesta.name}:{encuesta.dependencia}</a>
                    <table>
                    <tr>
                      <th>Pregunta</th>
                      <th>Persona</th>
                      <th>Respuesta</th>
                      <th>Tipo</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>-</td>
                      <td>{encuesta.dependencia}</td>
                      <td>nombre de dependencia</td>
                    </tr>
                    <tr>
                      <td>2.1.1</td>
                      <td>jefe</td>
                      <td>{encuesta.p2_name_jefe}</td>
                      <td>nombre de la persona</td>
                    </tr>
                    <tr>
                      <td>2.1.2</td>
                      <td>jefe</td>
                      <td>{encuesta.p2_dependencia_jefe}</td>
                      <td>nombre de dependencia</td>
                    </tr>
                    <tr>
                      <td>2.2.1</td>
                      <td>1</td>
                      <td>{encuesta.p2_name_pers1}</td>
                      <td>nombre de la persona</td>
                    </tr>
                    <tr>
                      <td>2.2.2</td>
                      <td>1</td>
                      <td>{encuesta.p2_dependencia_pers1}</td>
                      <td>nombre de dependencia</td>
                    </tr>
                    <tr>
                      <td>2.3.1</td>
                      <td>2</td>
                      <td>{encuesta.p2_name_pers2}</td>
                      <td>nombre de la persona</td>
                    </tr>
                    <tr>
                      <td>2.3.2</td>
                      <td>2</td>
                      <td>{encuesta.p2_dependencia_pers2}</td>
                      <td>nombre de dependencia</td>
                    </tr>
                    <tr>
                      <td>2.4.1</td>
                      <td>3</td>
                      <td>{encuesta.p2_name_pers3}</td>
                      <td>nombre de la persona</td>
                    </tr>
                    <tr>
                      <td>2.4.2</td>
                      <td>3</td>
                      <td>{encuesta.p2_dependencia_pers3}</td>
                      <td>nombre de dependencia</td>
                    </tr>
                    <tr>
                      <td>2.5.1</td>
                      <td>4</td>
                      <td>{encuesta.p2_name_pers4}</td>
                      <td>nombre de la persona</td>
                    </tr>
                    <tr>
                      <td>2.5.2</td>
                      <td>4</td>
                      <td>{encuesta.p2_dependencia_pers4}</td>
                      <td>nombre de dependencia</td>
                    </tr>
                    <tr>
                      <td>2.6.1</td>
                      <td>5</td>
                      <td>{encuesta.p2_name_pers5}</td>
                      <td>nombre de la persona</td>
                    </tr>
                    <tr>
                      <td>2.6.2</td>
                      <td>5</td>
                      <td>{encuesta.p2_dependencia_pers5}</td>
                      <td>nombre de dependencia</td>
                    </tr>
                    <tr>
                      <td>3.1</td>
                      <td>jefe</td>
                      <td>{encuesta.p3_salario_jefe}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>3.2</td>
                      <td>1</td>
                      <td>{encuesta.p3_salario_pers1}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>3.3</td>
                      <td>2</td>
                      <td>{encuesta.p3_salario_pers2}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>3.4</td>
                      <td>3</td>
                      <td>{encuesta.p3_salario_pers3}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>3.5</td>
                      <td>4</td>
                      <td>{encuesta.p3_salario_pers4}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>3.6</td>
                      <td>5</td>
                      <td>{encuesta.p3_salario_pers5}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>4.1</td>
                      <td>jefe</td>
                      <td>{encuesta.p4_salario_jefe}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>4.2</td>
                      <td>1</td>
                      <td>{encuesta.p4_salario_pers1}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>4.3</td>
                      <td>2</td>
                      <td>{encuesta.p4_salario_pers2}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>4.4</td>
                      <td>3</td>
                      <td>{encuesta.p4_salario_pers3}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>4.5</td>
                      <td>4</td>
                      <td>{encuesta.p4_salario_pers4}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>4.6</td>
                      <td>5</td>
                      <td>{encuesta.p4_salario_pers5}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>-</td>
                      <td>{encuesta.p5_cantidad}</td>
                      <td>cantidad MXN</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>-</td>
                      <td>{encuesta.p6_cantidad}</td>
                      <td>cantidad MXN</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>-</td>
                      <td>{encuesta.p7_probabilidad}</td>
                      <td>probabilidad</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>-</td>
                      <td>{encuesta.p8_cantidad}</td>
                      <td>cantidad MXN</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>-</td>
                      <td>{encuesta.p9_probabilidad}</td>
                      <td>probabilidad</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>-</td>
                      <td>{encuesta.p10_cantidad}</td>
                      <td>cantidad MXN</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>-</td>
                      <td>{encuesta.p11_salario}</td>
                      <td>salario mensual (mxn)</td>
                    </tr>
                    <tr>
                      <td>12.1</td>
                      <td>-</td>
                      <td>{encuesta.p12_probabilidad1}</td>
                      <td>probabilidad</td>
                    </tr>
                    <tr>
                      <td>12.2</td>
                      <td>-</td>
                      <td>{encuesta.p12_probabilidad2}</td>
                      <td>probabilidad</td>
                    </tr>
                    <tr>
                      <td>13.1</td>
                      <td>-</td>
                      <td>{encuesta.p13_incomodo}</td>
                      <td>binaria</td>
                    </tr>
                    <tr>
                      <td>13.2</td>
                      <td>-</td>
                      <td>{encuesta.p13_esprta}</td>
                      <td>binaria</td>
                    </tr>
                    <tr>
                      <td>13.3</td>
                      <td>-</td>
                      <td>{encuesta.p13_aceptable}</td>
                      <td>binaria</td>
                    </tr>

                    </table>
                </li>
            ))}
        </ul>
    </Container>
);


export default withView()(EncuestasList);
