
//
// Fallback Command
//
module.exports = function (controller) {

    controller.on( 'message,direct_message', async ( bot, message ) => {

        let markDown = `Sorry, I did not understand.  \nTry: ${ controller.checkAddMention( message.roomType, 'help' ) }`;
        
        try {
            const response = await fetch("/generate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ animal: 'Horse is faster' }),
            });
      
            const data = await response.json();
            if (response.status !== 200) {
              throw data.error || new Error(`Request failed with status ${response.status}`);
            }
      
            //setResult(data.result);
            // setAnimalInput("");
          } catch(error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
          }

        await bot.reply( message, { markdown: daat.data } );
    });
}