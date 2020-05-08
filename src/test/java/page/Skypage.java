package page;

import org.junit.After;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.IOException;


public class Skypage {

    static WebDriver driver;

    private static String btnClosed = "div[class='modal-header borderless'] button[type='button'] span[aria-hidden='true']";
    private static String btnProgramacao = "div.collapse.navbar-collapse.hidden-sm > ul.nav.navbar-nav.menu-link.menu-link-top > li:nth-child(3) > a";
    private static String elementAgora = "//*[@id=\"schedules-container\"]/div[3]/div/div";
    private static String programacao = "//*[@id=\"schedules-container\"]//div[3]/div//div[1]/div[2]/div//div/div[2]/div/div[1]";
    private static String tituloProgramacao = "//h2[text()=\"A Vida de Nina\"]";

    public Skypage(WebDriver driver) {
        Skypage.driver = driver;
    }

    public void acessarUrlLogin(String url) throws IOException {

        Skypage.driver.get(url);
    }

    public void acessarProgramação()
    {
        Skypage.driver.findElement(By.cssSelector(btnClosed)).click();
        Skypage.driver.findElement(By.cssSelector(btnProgramacao)).click();
    }

    public void programacaoselecionada()
    {
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("scrollBy(0,850)", "");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementAgora)));
        Skypage.driver.findElement(By.xpath(programacao)).click();
    }

    public void validarTexto()
    {
       WebElement element = driver.findElement(By.xpath(tituloProgramacao));
       String text = element.getText();
       Assert.assertTrue(text.contains(text));
    }

    @After
    public void fecharNavegador() {

        System.out.println("Navegador fechado");
        driver.close();

    }
}
