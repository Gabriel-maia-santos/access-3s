import React from 'react';

import { Flex, Space, Table, Tag, Card, Button, Avatar } from 'antd';
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const justifyOptions = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];

import { Link } from 'react-router-dom';


const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Setor',
        dataIndex: 'setor',
        key: 'setor',
    },
    {
        title: 'Tipo usuario',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Recisao',
        dataIndex: 'recisao',
        key: 'recisao',
    },
    {
        title: 'Colaborador',
        dataIndex: 'colaborador',
        key: 'colaborador',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a style={{ color: "red"} }><DeleteOutlined/></a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


export const Home = () => {

        const [justify, setJustify] = React.useState(justifyOptions[3]);
    const [alignItems, setAlignItems] = React.useState(alignOptions[1]);
    const [dados, setDados] = useState(null);

    const fazerRequisicao = async () => {
        try {
            // Faz a requisição GET para a URL desejada
            const resposta = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

            // Atualiza o estado com os dados da resposta
            setDados(resposta.data);
        } catch (erro) {
            // Lidar com erros, se necessário
            console.error('Erro na requisição:', erro.message);
        }
    };

    // Use useEffect para fazer a requisição assim que o componente for montado
    useEffect(() => {
        fazerRequisicao();
    }, []); // O segundo parâmetro [] significa que isso será executado apenas uma vez quando o componente for montado


    return (
            <body>
            <Flex style={{ backgroundColor: "#006FEE" }} justify={justify} align={alignItems}>
                <Avatar style={{ margin: 10 }} size={40} icon={<UserOutlined />} />
                <div style={{ margin: 10 }}>
                    <Button style={{ margin: 10, backgroundColor: "#EE9D00" }} type="primary">Ponto Digital</Button>
                    <Link to="/cadastro">
                        <Button style={{ margin: 10, backgroundColor: "#EE9D00" }} type="primary">Cadastro de usuario</Button>
                    </Link>

                </div>

            </Flex>

            <Flex style={{margin: 30}} justify={"center"} align={alignItems}>
                <Card
                    title="Tabela"
                    style={{
                        width: "80%",
                    }}
                >
                    <Table columns={columns} dataSource={dados} />
                </Card>
            </Flex>

           

        </body>

        );
}