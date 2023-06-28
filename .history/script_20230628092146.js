const teaSelection = document.getElementById('teaSelection');
    const recipeSizeInput = document.getElementById('recipeSize');
    const teaTables = document.getElementById('teaTables');
    const tables = teaTables.querySelectorAll('table');

    function updateIngredientQuantities(tea) {
      const recipeSize = parseInt(recipeSizeInput.value);
      const baseQuantities = {
        air: { dandelionLeaf: 4, borage: 3, peppermintLeaf: 3, lavender: 1, lemongrass: 3, honeysuckle: 2 },
        aphroditea: { dehydratedApples: 3, rosePetals: 4, rosehips: 3, linden: 2, oregano: 1, hawthornBerries: 3 },
        aquarius: { jasmineGreenTea: 6, jasmineFlowers: 3, lavender: 3, honeysuckle: 2},
        aries: {lemonBalm: 4, gingerRoot: 5, blessedThistle: 2, rosemary: 3, nettleLeaf: 2},
        asclepius: {tulsi: 5,  chamomile: 4, lemongrass: 2, lemonPeel: 2, stJohnsWort: 2, peppermintLeaf: 1},
        bloodMoon: {hibiscusFlower: 3, hawthornLeaf: 3, hawthornBerries: 3, calendula: 1, oatBuds: 2, rosePetals: 2, dehydratedApples: 2},

        // Add new tea base quantities below
        // new_tea: { ingredient1: quantity1, ingredient2: quantity2, ... }
      };
      const ingredients = baseQuantities[tea];

      for (const ingredient in ingredients) {
        const quantityElement = document.querySelector(`#${tea}Table .ingredientQty[data-ingredient="${ingredient}"]`);
        const baseQuantity = ingredients[ingredient];
        const calculatedQuantity = (baseQuantity / 16) * recipeSize;
        quantityElement.textContent = calculatedQuantity.toFixed(1);
      }
    }

    function handleTeaSelection() {
      const selectedTea = teaSelection.value;
      tables.forEach(table => {
        if (table.id === `${selectedTea}Table`) {
          table.classList.remove('d-none');
          updateIngredientQuantities(selectedTea);
        } else {
          table.classList.add('d-none');
        }
      });
    }

    // Event listeners
    teaSelection.addEventListener('change', handleTeaSelection);
    recipeSizeInput.addEventListener('input', handleTeaSelection);