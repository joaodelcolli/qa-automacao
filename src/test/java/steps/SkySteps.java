package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;
import page.Skypage;

public class SkySteps {

    WebDriver driver = config.config.CreateWebDriver("chrome");

    Skypage page = new Skypage(driver);

    @Dado("^que acesso o site da sky (.*)$")
    public void AcessoOSitedaSky(String url) throws Exception {
        page.acessarUrlLogin(url);
    }

    @E("^seleciono em progração$")
    public void selecionoEmProgração() {
        page.acessarProgramação();
    }

    @Quando("^seleciono a programação que está passando na hora$")
    public void selecionoAProgramaçãoQueEstáPassandoNaHora() {
        page.programacaoselecionada();
    }

    @Entao("^valido se o texto é o mesmo do modal$")
    public void validoSeOTextoÉOMesmoDoModal() {
        page.validarTexto();
        page.fecharNavegador();
    }
}
