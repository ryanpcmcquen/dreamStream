var dreamStream = prompt("Does your dream begin on the GROUND, the SKY or UNDERWATER?").toUpperCase();
var coconutBool = true;

switch (dreamStream) {
    case 'GROUND':
      prompt("You're running quite quickly, are you running from someone?").toLowerCase();
        if ("yes") {
          prompt("Are they scary?").toLowerCase();
          if ("yes") {
            alert("Keep running!");
          } else {
            alert("If I were you I would befriend them.");
          }
        } else {
          alert("Take a break then!");
        }

      break;
    case 'SKY':
      prompt("You're falling quite quickly, can you fly?").toLowerCase();
        if ("yes") {
          alert("Enjoy it!");
        } else {
          alert("Good luck!");
        }
      break;
    case 'UNDERWATER':
      prompt("Your eyes slowly open, you're drowning, should you swim UP or DOWN?").toLowerCase();
        if ("up") {
          prompt("You continue swimming upward, after quite a while you emerge near a deserted island, should you swim toward it?").toLowerCase();
            if ("yes") {
              prompt("You slowly rise on the sand, your foot runs into a coconut, will you try to eat it?").toLowerCase();
              if ("yes") {
                while (coconutBool) {
                  prompt("What are you going to break the coconut with?").toLowerCase(); {
                    if ("a proper tool" || "a proper utensil") {
                      alert("Success! You've replenished vital nutrients.");
                      coconutBool = false;
                    }   else {
                      alert("Well that won't work!");
                    }
                  }
                }
              }
            }
        }
      break;
    default:
      alert("No.");
      break;
}
