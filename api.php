<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST")
{

    print_r($_POST);

    $valor = $_POST['valor'];
    $nome = $_POST['nome'];
    $hora = $_POST['hora'];

    file_put_contents("valor.txt", $valor);
    file_put_contents("nome.txt", $nome);
    file_put_contents("hora.txt", $hora);
    file_put_contents("log_valor.txt", $valor . "\n", FILE_APPEND);
    file_put_contents("log_hora.txt", $hora . "\n", FILE_APPEND);

    if (isset($_POST['nome'], $_POST['valor'], $_POST['hora']))
    {

        print_r("files/" . $_POST['nome'] . "/valor.txt");
        file_put_contents("files/" . $_POST['nome'] . "/valor.txt", $valor);
        file_put_contents("files/" . $_POST['nome'] . "/hora.txt", $hora);
        file_put_contents("files/" . $_POST['nome'] . "/log_valor.txt", $valor . "\n", FILE_APPEND);
        file_put_contents("files/" . $_POST['nome'] . "/log_hora.txt", $hora . "\n", FILE_APPEND);
    }

    $valor_temp = file_get_contents("files/" . $_POST['nome'] . "/valor.txt");
    echo $valor_temp;

}
elseif ($_SERVER["REQUEST_METHOD"] == "GET")
{
    echo "Recebido um get";
}
else
{
    echo "metodo nao permitido";
}

}
else
{
    echo "ERROR";
}

?>
