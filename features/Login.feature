Feature: Login App


Scenario: Add item to Cart
    Given que me logueo con mi usuario "<userEmail>" y contrasena "<password>"
    When agregue el item "<itemAdd>" al carrito de comrpas
    Then validar que el item "<itemAdd>" este agregado en el carro de comrpas

    Examples:
    | userEmail                  | password     | itemAdd       |
    | practicando01@test.com     | Abc12345     | ZARA COAT 3   |