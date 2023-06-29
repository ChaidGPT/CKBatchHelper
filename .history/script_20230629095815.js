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
        blueMoon: {elderFlowers: 4, starAnise: 4, nutmeg: 1, mugwort: 2, hopsFlowers: 1, butterflyPeaFlower: 4},
        brightMoon: {spearmintLeaf: 4, rosePetals: 3, borage: 2, eulethero: 3, elderFlowers: 4},
        cancer: {chamomile: 6, redCloverBlossoms: 3, lemonVerbena: 3, dandelionLeaf: 4},
        capricorn: {rooibos: 6, vanillaBean: 1, licoriceRoot: 2, cinnamon: 3, orangePeel: 2, cloves: 2},
        chiron: {sage: 3, rosemary: 3, turmeric: 2, thyme: 3, dill: 1, parsley: 2, peppercorns: 2},
        coldMoon: {damiana: 1, juniperBerries: 1, licoriceRoot: 3, orangePeel: 2, cinnamon: 2, rosehips: 3, wildCherryBark: 4},
        cronus: {chamomile: 4, gingerRoot: 3, spearmintLeaf: 1, chasteTreeBerries: 2, fennel: 3},
        crowMoon: {dehydratedApples: 2, gojiBerries: 3, licoriceRoot: 2, tulsi: 3, wildCherryBark: 4, calendula: 2},
        demeter: {raspberryLeaf: 2, redCloverBlossoms: 4, orangePeel: 3, cardamom: 4, rosehips: 3},
        dionysus: {hibiscusFlower: 6, cinnamon: 2, lemonPeel: 2, orangePeel: 2, cloves: 2, starAnise: 2},
        earth: {hawthornLeaf: 6, clover: 2, licoriceRoot: 2, blackberryLeaf: 2, oatStraw: 4},
        eos: {roastedDandelionRoot: 6, roastedChicoryRoot: 2, macaRoot: 2, gingerRoot: 1, cinnamon: 2, reishi: 2, orangePeel: 1},
        eros: {sarsparilla: 1.5, gojiBerries: 2, beetroot: 2.5, astragalus: 1.5, cacaoNibs: 3, ashwaganda: 1.5, dandelionRoot: 2.5},
        fire: {rooibos: 8, calendula: 1, gingerRoot: 3, orangePeel: 2, cinnamon: 2},
        flora: {rooibos: 6, calendula: 3, rosePetals: 4, lemonPeel: 3},
        gemini: {honeysuckle: 4, californiaPoppy: 3, oatBuds: 3, oatStraw: 3, licoriceRoot: 3},
        grainMoon: {chamomile: 5, orangePeel: 4, astragalus: 3, licoriceRoot: 2, eulethero: 2},
        hades: {spearmintLeaf: 6, calendula: 4, juniperBerries: 3, californiaPoppy: 3},
        harvestMoon: {fenugreek: 3, raspberryLeaf: 2, oatStraw: 4, valerianRoot: 1, fennel: 4, hopsFlowers: 2},
        hebe: {lavender: 2, nettleLeaf: 2, licoriceRoot: 3, peppercorns: 4, honeybush: 5},
        leo: {calendula: 2, hawthornLeaf: 4, mullein: 1, rosePetals: 2, lemonPeel: 3, lemonBalm: 1, gingerRoot: 3},
        libra: {rosePetals: 4, passionFlower: 2, rooibos: 4, nettleLeaf: 4, honeysuckle: 2},
        mourningMoon: {peppermintLeaf: 3, slipperyElm: 4, lemonPeel: 3, rosePetals: 4, marshmallowLeaf: 2},
        persephone: {lemonBalm: 3, freezeDriedPomegranate: 4, parsleyRoot: 6, cornFlowers: 3},
        pisces: {tulsi: 8, mullein: 2, dandelionLeaf: 4, whiteWillowBark: 2},
        pomona: {rosePetals: 2, hawthornBerries: 2, elderberries: 3, orangePeel: 2, rosehips: 3, licoriceRoot: 2, hibiscusFlower: 1, calendula: 1},
        quietMoon: {whitePeony: 3, turmeric: 3, gingerRoot: 3, cinnamon: 3, peppercorns: 2, fennel: 2},
        rhea: {chamomile: 4, cloves: 2, cinnamon: 3, fenugreek: 2, dehydratedApples: 1, elderberries: 3, calendula: 1},
        sagittarius: {dandelionLeaf: 8, rosePetals: 2, gingerRoot: 2, lemongrass: 4},
        sappho: {rosePetals: 1, violetLeaf: 3, linden: 4, shatavari:2, vanillaBean: 1, elderberries: 4, lavender:1},
        scorpio: {hibiscusFlower: 5, passionFlower: 3, blackberryLeaf: 3, eulethero: 3, dandelionLeaf: 2},
        snowMoon: {slipperyElm: 3, sage: 3, elderberries: 6, lavender: 2, hyssop: 2},
        sproutMoon: {raspberryLeaf: 2, redCloverBlossoms: 4, orangePeel: 3, cardamom: 4, rosehips: 3},
        virgo: {starAnise: 3, skullcap: 2, peppermintLeaf: 6, lavender: 1, thyme: 2, licoriceRoot: 2},
        water: {spearmintLeaf: 4, catnip: 3, californiaPoppy: 2, lemonBalm: 3, violetLeaf: 2, dandelionLeaf: 2},
        wortMoon: {lemonBalm: 3, hawthornBerries: 4, hyssop: 2, honeysuckle: 5, skullcap: 2}
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
          table.classList.add('fade-in'); // Add the fade-in class
          updateIngredientQuantities(selectedTea);
        } else {
          table.classList.remove('fade-in'); // Remove the fade-in class
          table.classList.add('d-none');
        }
      });
    }
    

    // Event listeners
    teaSelection.addEventListener('change', handleTeaSelection);
    recipeSizeInput.addEventListener('input', handleTeaSelection);