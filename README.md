TODO:

- [x] Fondo de las preguntas cambiar el vídeo (Azul claro, Azul oscuro y lila neon)
- [x] Splash screen
- [x] Animación typing para las ventanas de greetings
- [x] Los gráficos de resultados
- [x] Iconos de postSplash con los colores del boton
- [x] La pagina de profile y about
- [x] Sorteo post splash y drawer
- [x] Cambiar el promt para que las respuestas sean en segunda persona
- [x] Cambiar el prompt para que los resultados no tengan el mismo porcentaje
- [x] Modal para la página del sorteo
- [x] Añadida la fecha de sorteo a la base de datos y leida directamente desde la base de datos
- [x] Modal con los resultados del sorteo
- [x] Los cambios después del sorteo
- [x] Cambiar el botón que dice participar, participando por uno que diga Ganador
- [x] Siguientes sorteos
- [x] Añadir el token cuando la persona hace un test
- [x] Id de los sorteos es substring(0, 8)
- [ ] Botón de Login con apple
- [ ] Pagina con información de las bases y condiciones del sorteo en nextJs
- [x] Afinar los resultados del la ia para que los porcentajes sean más diferentes
- [ ] Resend confirmación para la participación del Sorteo
- [ ] Resend enviar correo cuando se logee en la aplicación




CONFIG:
- [ ] Adsense: AdSense pub-1363594265742110
DKIM and SPF
type    Host/Name               Value                                                                                                                                                                                                                           Priority    TTL
MX      send                    feedback-smtp.eu-west-1.amazonses.com                                                                                                                                                                                           10          Auto
TXT     send                    v=spf1 include:amazonses.com ~all                                                                                                                                                                                                           Auto
TXT     resend._domainkey       p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuFQ88VChdF+fZ18ywXBxuiSjQch+vStFt1lRRm3H0Dsf5SpjKJ9NIj6aaSWQZaqcGg4Ft3pvbiJwmMatGVS8RiCsU1CqTjP1DeNcW13uHqDwc+brbuD6leSSXfKgkdd2uSkintmDfHdcvSRD2modBUmwnUCr0lxZfnlM6KUI3IQIDAQAB

DMARC 

type    Host/Name               Value               TTL
TXT     _dmarc                  v=DMARC1; p=none;   Auto
