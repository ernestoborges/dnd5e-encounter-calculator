export function calcXpTreshold(inputs) {
  let totalXp = [];
  totalXp = inputs.map((input) => {
    let xp = { easy: 0, medium: 0, hard: 0, deadly: 0 };
    switch (input.level) {
      case 1:
        xp.easy = input.players * 25;
        xp.medium = input.players * 50;
        xp.hard = input.players * 75;
        xp.deadly = input.players * 100;
        break;
      case 2:
        xp.easy = input.players * 50;
        xp.medium = input.players * 100;
        xp.hard = input.players * 150;
        xp.deadly = input.players * 200;
        break;
      case 3:
        xp.easy = input.players * 75;
        xp.medium = input.players * 150;
        xp.hard = input.players * 225;
        xp.deadly = input.players * 400;
        break;
      case 4:
        xp.easy = input.players * 125;
        xp.medium = input.players * 250;
        xp.hard = input.players * 375;
        xp.deadly = input.players * 500;
        break;
      case 5:
        xp.easy = input.players * 250;
        xp.medium = input.players * 500;
        xp.hard = input.players * 750;
        xp.deadly = input.players * 1100;
        break;
      case 6:
        xp.easy = input.players * 300;
        xp.medium = input.players * 600;
        xp.hard = input.players * 900;
        xp.deadly = input.players * 1400;
        break;
      case 7:
        xp.easy = input.players * 350;
        xp.medium = input.players * 750;
        xp.hard = input.players * 1100;
        xp.deadly = input.players * 1700;
        break;
      case 8:
        xp.easy = input.players * 450;
        xp.medium = input.players * 900;
        xp.hard = input.players * 1400;
        xp.deadly = input.players * 2100;
        break;
      case 9:
        xp.easy = input.players * 550;
        xp.medium = input.players * 1100;
        xp.hard = input.players * 1600;
        xp.deadly = input.players * 2400;
        break;
      case 10:
        xp.easy = input.players * 600;
        xp.medium = input.players * 1200;
        xp.hard = input.players * 1900;
        xp.deadly = input.players * 2800;
        break;
      case 11:
        xp.easy = input.players * 800;
        xp.medium = input.players * 1500;
        xp.hard = input.players * 2400;
        xp.deadly = input.players * 3600;
        break;
      case 12:
        xp.easy = input.players * 1000;
        xp.medium = input.players * 2000;
        xp.hard = input.players * 3000;
        xp.deadly = input.players * 4500;
        break;
      case 13:
        xp.easy = input.players * 1100;
        xp.medium = input.players * 2200;
        xp.hard = input.players * 3400;
        xp.deadly = input.players * 5100;
        break;
      case 14:
        xp.easy = input.players * 1250;
        xp.medium = input.players * 2500;
        xp.hard = input.players * 3800;
        xp.deadly = input.players * 5700;
        break;
      case 15:
        xp.easy = input.players * 1400;
        xp.medium = input.players * 2800;
        xp.hard = input.players * 4300;
        xp.deadly = input.players * 6500;
        break;
      case 16:
        xp.easy = input.players * 1600;
        xp.medium = input.players * 3200;
        xp.hard = input.players * 4800;
        xp.deadly = input.players * 7200;
        break;
      case 17:
        xp.easy = input.players * 2000;
        xp.medium = input.players * 3900;
        xp.hard = input.players * 5900;
        xp.deadly = input.players * 8800;
        break;
      case 18:
        xp.easy = input.players * 2100;
        xp.medium = input.players * 4200;
        xp.hard = input.players * 6300;
        xp.deadly = input.players * 9500;
        break;
      case 19:
        xp.easy = input.players * 2400;
        xp.medium = input.players * 4900;
        xp.hard = input.players * 7300;
        xp.deadly = input.players * 10900;
        break;
      case 20:
        xp.easy = input.players * 2800;
        xp.medium = input.players * 5700;
        xp.hard = input.players * 8500;
        xp.deadly = input.players * 12700;
        break;
      default:
        break;
    }
    return xp;
  });
  let easy = totalXp.map((item) => item.easy).reduce((a, b) => a + b, 0);
  let medium = totalXp.map((item) => item.medium).reduce((a, b) => a + b, 0);
  let hard = totalXp.map((item) => item.hard).reduce((a, b) => a + b, 0);
  let deadly = totalXp.map((item) => item.deadly).reduce((a, b) => a + b, 0);

  return { easy: easy, medium: medium, hard: hard, deadly: deadly };
}
