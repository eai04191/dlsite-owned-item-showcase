(function() {
    if (document.location.hostname !== "play.dlsite.com") {
        alert("DLsite Playで実行してください。");
        return false;
    }

    fetch("https://play.dlsite.com/api/dlsite/purchases?limit=5000", {
        credentials: "include"
    })
        .then(response => {
            return response.text();
        })
        .then(jsonString => {
            let name = prompt("名前を入力してください。", "名無し");
            if (name != null) {
                if (!name) {
                    name = "名無し";
                }
            }

            const params = new URLSearchParams();
            params.append("data", jsonString);
            params.append("name", name);

            return fetch("https://dois.now.sh/v1/items", {
                method: "POST",
                body: params
                // referrerPolicy: "unsafe-url"
            });
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            window.open("http://dois.netlify.com/?" + data.id);
        })
        .catch(error =>
            alert("取得・送信中にエラーが発生しました。\n" + error)
        );
})();
