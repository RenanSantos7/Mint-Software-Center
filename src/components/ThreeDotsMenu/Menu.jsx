import styles from './ThreeDotsMenu.module.css'

export default function ThreeDotsMenu() {
    return (
        <menu>
            <li>
                <span>Mostrar aplicativos instalados</span>
            </li>

            <hr />

            <li>
                <Switcher>Pesquisar no resumo dos pacotes (pesquisa lenta)</Switcher>
            </li>

            <li>
                <Switcher>Pesquisar na descrição dos pacotes (pesquisa mais lenta ainda)</Switcher>
            </li>

            <hr />

            <li>Atualizar lista de pacotes</li>

            <li>Configurações</li>

            <li>Sobre</li>
        </menu>
    )
}
