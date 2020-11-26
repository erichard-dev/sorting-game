

    // global variables
    var riddles = [];
    var cpt = 0;
    var unordenedList;
    var ordenedList;
    const source = document.querySelector("#source");
    const target = document.querySelector("#target");
    const btnReset = document.querySelector("#reset");
    const btnSubmit = document.querySelector("#submit");
    const btnNext = document.querySelector("#next");


    function renderList(data, UIElement) {
        data.forEach(itemName => {
            let item = document.createElement("li");
            item.textContent = itemName;
            item.setAttribute("id", itemName);
            item.setAttribute("draggable", true);
            item.addEventListener("dragstart", dragstart_handler);
            UIElement.appendChild(item);
        });
    }

    function renderInstruction() {
        let instructionElement = document.querySelector("#instruction > span");
        instructionElement.textContent = riddles[cpt].instruction;
    }

    function initGame() {
        fetch('http://0.0.0.0:5000/data')
            .then(response => response.json()).then((json) => {
                json.riddles.forEach((object) => {
                    riddles.push({ instruction: object.instruction, answer: object.answer });
                });
                initRiddle();
            });
    }

    function initRiddle() {
        unordenedList = shuffle(riddles[cpt].answer);
        ordenedList = [];
        clearLists();
        renderList(unordenedList, source);
        renderInstruction();
    }

    function resetList() {
        clearLists();
        ordenedList = [];
        unordenedList = shuffle(riddles[cpt].answer);
        renderList(unordenedList, source);
    }

    function clearLists() {
        let items = document.querySelectorAll("li");
        items.forEach(item => item.remove());
    }

    function dragstart_handler(ev) {
        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData("application/my-app", ev.target.id);
        ev.dataTransfer.dropEffect = "move";
    }

    function dragover_handler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
    }

    function drop_handler_target(ev) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("application/my-app");
        if (!ordenedList.includes(data)) {
            ordenedList.push(data);
            unordenedList.splice(unordenedList.indexOf(data), 1);
            clearLists();
            renderList(ordenedList, target);
            renderList(unordenedList, source);
        }
    }

    function drop_handler_source(ev) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("application/my-app");
        if (!unordenedList.includes(data)) {
            unordenedList.push(data);
            ordenedList.splice(ordenedList.indexOf(data), 1);
            clearLists();
            renderList(ordenedList, target);
            renderList(unordenedList, source);
        }
    }

    function submit() {
        let winMessage = "YOU WIN";
        let loseMessage = "YOU LOSE";
        if (hadWon()) {
            displayMessage(winMessage);
            setTimeout(clearMessage, 3000);
        } else {
            displayMessage(loseMessage);
            setTimeout(clearMessage, 3000);
        }
    }

    function hadWon() {
        return ordenedList.toString() == riddles[cpt].answer.toString();
    }

    function next() {
        cpt += 1;
        if (cpt < riddles.length) {
            initRiddle();
        } else {
            cpt = 0;
            initRiddle();
        }
    }

    function displayMessage(message) {
        let instructionElement = document.querySelector("#instruction");
        let flashMessage = document.createElement("p");
        flashMessage.textContent = message;
        instructionElement.appendChild(flashMessage);
    }

    function clearMessage() {
        document.querySelector("#instruction p").remove();
    }

    function shuffle(list) {
        let shuffleResult = [];
        let answerCopy = list.concat();// create a copy of an array instead of passing the ref
        while (answerCopy.length > 0) {
            let arrayElement = answerCopy.splice(getRandomInt(answerCopy.length), 1);
            shuffleResult.push(arrayElement[0]);
        }
        return shuffleResult;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // drop zone
    source.addEventListener("dragover", dragover_handler);
    source.addEventListener("drop", drop_handler_source);
    target.addEventListener("dragover", dragover_handler);
    target.addEventListener("drop", drop_handler_target);

    // buttons
    btnReset.addEventListener("click", resetList);
    btnSubmit.addEventListener("click", submit);
    btnNext.addEventListener("click", next);

    // init
    initGame();