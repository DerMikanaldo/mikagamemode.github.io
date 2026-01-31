const docs = [
    {
        modul: "Core › admin",
        name: "GMADMIN.OpenMainMenu",
        params: "",
        type: "client",
        beschreibung: "Öffnet das Haupt-Administrationsmenü. Kann global mit F7 aufgerufen werden."
    },
    {
        modul: "Core › admin",
        name: "GMADMIN.OpenCharacterMenu",
        params: "",
        type: "client", 
        beschreibung: "Öffnet das globale Charakter-Verwaltungsmenü für Admins."
    },
    {
        modul: "Core › admin",
        name: "GMADMIN.OpenJobManager",
        params: "",
        type: "client",
        beschreibung: "Öffnet den Job-Manager für Administratoren."
    },
    {
        modul: "Core › admin",
        name: "GMADMIN.ShowCharacter",
        params: "data",
        type: "client",
        beschreibung: "Zeigt detaillierte Informationen zu einem ausgewählten Charakter an."
    },
    {
        modul: "Core › character",
        name: "CHARSYS.OpenSelection",
        params: "",
        type: "client",
        beschreibung: "Öffnet das Charakterauswahlmenü"
    },
    {
        modul: "Core › character",
        name: "CHARSYS.OpenCreation",
        params: "",
        type: "client", 
        beschreibung: "Öffnet das Charaktererstellungsmenü"
    },
    {
        modul: "Core › character",
        name: "CHARSYS.WelcomeScreen",
        params: "",
        type: "client",
        beschreibung: "Zeigt den Willkommensbildschirm mit Charakterauswahl"
    },
    {
        modul: "Core › character",
        name: "CHARSYS.CreateChar",
        params: "name, gender, faction, ply, history",
        type: "server",
        beschreibung: "Erstellt einen neuen Charakter in der Datenbank"
    },
    {
        modul: "Core › character",
        name: "CHARSYS.GetCharsFromDB",
        params: "ply, callback",
        type: "server",
        beschreibung: "Lädt alle Charaktere eines Spielers aus der Datenbank"
    },
    {
        modul: "Core › character › meta",
        name: "Player:GetCharID",
        params: "",
        type: "shared",
        beschreibung: "Gibt die aktuelle Charakter-ID des Spielers zurück"
    },
    {
        modul: "Core › character › meta", 
        name: "Player:GetChar",
        params: "num",
        type: "shared",
        beschreibung: "Gibt die Charakterdaten für eine bestimmte ID zurück"
    },
    {
        modul: "Core › character › meta",
        name: "Player:GetGender",
        params: "",
        type: "shared",
        beschreibung: "Gibt das Geschlecht des Charakters zurück (1 = männlich, 2 = weiblich)"
    },
    {
        modul: "Core › character › meta",
        name: "Player:IsMale",
        params: "",
        type: "shared",
        beschreibung: "Prüft ob der Charakter männlich ist"
    },
    {
        modul: "Core › character › meta",
        name: "Player:IsFemale", 
        params: "",
        type: "shared",
        beschreibung: "Prüft ob der Charakter weiblich ist"
    },
    {
        modul: "Core › properties",
        name: "Player:SetCharacterProperty",
        params: "key, value",
        type: "server",
        beschreibung: "Setzt eine Eigenschaft für den aktuellen Charakter in der Datenbank"
    },
    {
        modul: "Core › properties",
        name: "Player:GetCharacterProperty",
        params: "key, callback",
        type: "server",
        beschreibung: "Liest eine Eigenschaft des aktuellen Charakters aus der Datenbank"
    },
    {
        modul: "Core › properties",
        name: "Player:RemoveCharacterProperty",
        params: "key",
        type: "server",
        beschreibung: "Entfernt eine Eigenschaft des aktuellen Charakters aus der Datenbank"
    },
    {
        modul: "Core › properties",
        name: "Player:SetProperty",
        params: "key, value",
        type: "server",
        beschreibung: "Setzt eine spielerbezogene (nicht charakterbezogene) Eigenschaft in der Datenbank"
    },
    {
        modul: "Core › properties",
        name: "Player:GetProperty",
        params: "key, callback",
        type: "server",
        beschreibung: "Liest eine spielerbezogene Eigenschaft aus der Datenbank"
    },
    {
        modul: "Core › properties",
        name: "Player:RemoveProperty",
        params: "key",
        type: "server",
        beschreibung: "Entfernt eine spielerbezogene Eigenschaft aus der Datenbank"
    },
    {
        modul: "Core › properties",
        name: "Player:UpdateCharacterModel",
        params: "modelpath",
        type: "server",
        beschreibung: "Aktualisiert das Modell des aktuellen Charakters in der Datenbank und auf dem Server"
    },
    {
        modul: "Core › properties",
        name: "Properties:SetCharacterProperty",
        params: "charid, key, value",
        type: "server",
        beschreibung: "Globale Funktion zum Setzen einer Charaktereigenschaft über die Charakter-ID"
    },
    {
        modul: "Core › properties",
        name: "Properties:GetCharacterProperty",
        params: "charid, key, callback",
        type: "server",
        beschreibung: "Globale Funktion zum Lesen einer Charaktereigenschaft über die Charakter-ID"
    },
    {
        modul: "Core › properties",
        name: "Properties:RemoveCharacterProperty",
        params: "charid, key",
        type: "server",
        beschreibung: "Globale Funktion zum Entfernen einer Charaktereigenschaft über die Charakter-ID"
    },
    {
        modul: "Core › properties",
        name: "Properties:GetAllCharacterProperties",
        params: "charid, callback",
        type: "server",
        beschreibung: "Liest alle Eigenschaften eines Charakters aus der Datenbank"
    },
    {
        modul: "Core › chat",
        name: "Chat:Register",
        params: "id, data",
        type: "server",
        beschreibung: "Registriert einen neuen Chat-Typ mit der angegebenen ID und Konfiguration"
    },
    {
        modul: "Core › chat",
        name: "Chat:RegisterCommand", 
        params: "id, data",
        type: "server",
        beschreibung: "Registriert einen neuen Chat-Befehl"
    },
    {
        modul: "Core › chat › commands",
        name: "/ooc",
        params: "message",
        type: "shared",
        beschreibung: "Out of Character Chat - Global für alle Spieler sichtbar"
    },
    {
        modul: "Core › chat › commands",
        name: "/looc",
        params: "message",
        type: "shared", 
        beschreibung: "Local Out of Character Chat - Nur für Spieler in der Nähe (500 Einheiten) sichtbar"
    },
    {
        modul: "Core › chat › commands",
        name: "/roll",
        params: "",
        type: "shared",
        beschreibung: "Würfelt eine Zahl zwischen 0-100, sichtbar für Spieler in der Nähe"
    },
    {
        modul: "Core › chat › commands",
        name: "/rollg",
        params: "",
        type: "shared",
        beschreibung: "Würfelt eine Zahl zwischen 0-100, global sichtbar"
    },
    {
        modul: "Core › chat › commands",
        name: "/me",
        params: "message",
        type: "shared",
        beschreibung: "Zeigt eine Charakter-Aktion an, sichtbar für Spieler in der Nähe"
    },
    {
        modul: "Core › chat › commands",
        name: "/akt",
        params: "message",
        type: "shared",
        beschreibung: "Zeigt eine globale Aktion an"
    },
    {
        modul: "Core › chat › commands",
        name: "/it",
        params: "message",
        type: "shared",
        beschreibung: "Beschreibt die Umgebung/Situation, sichtbar für Spieler in der Nähe"
    },
    {
        modul: "Core › chat › commands",
        name: "/git",
        params: "message",
        type: "shared",
        beschreibung: "Beschreibt die Umgebung/Situation global"
    },
    {
        modul: "Core › chat › commands",
        name: "/unstuck",
        params: "",
        type: "shared",
        beschreibung: "Befreit einen festgesteckten Spieler (30 Sekunden Cooldown)"
    },
    {
        modul: "Core › deathscreen",
        name: "DEATH.StartDeathscreen",
        params: "attacker",
        type: "client",
        beschreibung: "Startet den Todesbildschirm und zeigt den Angreifer an"
    },
    {
        modul: "Core › deathscreen",
        name: "DEATH.StopDeathscreen",
        params: "",
        type: "client",
        beschreibung: "Beendet den Todesbildschirm"
    },
    {
        modul: "Core › deathscreen",
        name: "DEATH.SetTimer",
        params: "time",
        type: "client",
        beschreibung: "Setzt den Timer für die Wiederbelebungszeit"
    },
    {
        modul: "Core › escape",
        name: "ESCMenu:OpenMenu",
        params: "",
        type: "client",
        beschreibung: "Öffnet das ESC-Menü mit allen Optionen"
    },
    {
        modul: "Core › escape",
        name: "ESCMenu:CloseMenu",
        params: "",
        type: "client",
        beschreibung: "Schließt das ESC-Menü"
    },
    {
        modul: "Core › escape",
        name: "IHEscape:CreateButton",
        params: "name, data",
        type: "client",
        beschreibung: "Fügt einen neuen Button zum ESC-Menü hinzu"
    },
    {
        modul: "Core › escape › settings",
        name: "SETTINGS.OpenMenu",
        params: "",
        type: "client",
        beschreibung: "Öffnet das Einstellungsmenü"
    },
    {
        modul: "Core › escape › settings",
        name: "SETTINGS.OpenVisualEditor",
        params: "",
        type: "client",
        beschreibung: "Öffnet den visuellen HUD-Editor"
    },
    {
        modul: "Core › escape › settings",
        name: "SETTINGS.ResetToDefaults",
        params: "",
        type: "client",
        beschreibung: "Setzt alle Einstellungen auf Standardwerte zurück"
    },
    {
        modul: "Core › faction",
        name: "FACTION.GetPlayers",
        params: "faction",
        type: "shared",
        beschreibung: "Gibt alle Spieler einer bestimmten Fraktion zurück"
    },
    {
        modul: "Core › faction",
        name: "Player:SetFaction",
        params: "num",
        type: "server",
        beschreibung: "Setzt die Fraktion eines Spielers und den zugehörigen Standard-Job"
    },
    {
        modul: "Core › faction",
        name: "Player:GetFaction",
        params: "",
        type: "shared",
        beschreibung: "Gibt die aktuelle Fraktions-ID des Spielers zurück (Standard: 1)"
    },
    {
        modul: "Core › faction",
        name: "Player:IsCiv",
        params: "",
        type: "shared",
        beschreibung: "Prüft ob der Spieler ein Zivilist ist (Fraktion 1)"
    },
    {
        modul: "Core › inventory",
        name: "InventorySystem.CreateItem",
        params: "itemClass, itemData",
        type: "shared",
        beschreibung: "Erstellt einen neuen Gegenstandstyp im Inventarsystem"
    },
    {
        modul: "Core › inventory",
        name: "InventorySystem.CreateRarityItem",
        params: "itemClass, itemData",
        type: "shared",
        beschreibung: "Erstellt einen neuen Gegenstandstyp mit verschiedenen Seltenheitsstufen"
    },
    {
        modul: "Core › inventory",
        name: "Player:addItem",
        params: "itemClass, amount",
        type: "server", 
        beschreibung: "Fügt einem Spieler einen Gegenstand hinzu"
    },
    {
        modul: "Core › inventory",
        name: "Player:removeItem",
        params: "itemClass, amount",
        type: "server",
        beschreibung: "Entfernt einem Spieler einen Gegenstand"
    },
    {
        modul: "Core › inventory",
        name: "Player:HasItem",
        params: "itemClass, amount",
        type: "shared",
        beschreibung: "Prüft ob ein Spieler einen bestimmten Gegenstand besitzt"
    },
    {
        modul: "Core › inventory",
        name: "Player:GetItemAmount",
        params: "itemClass",
        type: "shared", 
        beschreibung: "Gibt die Anzahl eines bestimmten Gegenstands im Inventar zurück"
    },
    {
        modul: "Core › inventory",
        name: "Player:GetEmptyInvSlot",
        params: "",
        type: "shared",
        beschreibung: "Findet den nächsten freien Inventarplatz"
    },
    {
        modul: "Core › inventory › hotbar",
        name: "Player:AssignToHotbar",
        params: "inventorySlot, hotbarSlot",
        type: "server",
        beschreibung: "Weist einen Gegenstand einem Hotbar-Slot zu"
    },
    {
        modul: "Core › inventory › hotbar",
        name: "Player:RemoveFromHotbar",
        params: "hotbarSlot",
        type: "server", 
        beschreibung: "Entfernt einen Gegenstand aus der Hotbar"
    },
    {
        modul: "Core › jobs",
        name: "Medieval.createJob",
        params: "name, data, creator",
        type: "server",
        beschreibung: "Erstellt einen neuen Job in der Datenbank und synchronisiert ihn mit allen Clients"
    },
    {
        modul: "Core › jobs",
        name: "JOBS.FetchJobs",
        params: "",
        type: "server",
        beschreibung: "Lädt alle Jobs aus der Datenbank und richtet sie ein"
    },
    {
        modul: "Core › jobs",
        name: "JOBS:getTeamIDByCMD",
        params: "command",
        type: "shared",
        beschreibung: "Findet die Team-ID anhand des Befehls"
    },
    {
        modul: "Core › jobs",
        name: "JOBS:getTeamCMDByID",
        params: "ID",
        type: "shared",
        beschreibung: "Findet den Befehl anhand der Team-ID"
    },
    {
        modul: "Core › jobs › meta",
        name: "Player:changeJob",
        params: "teamID",
        type: "server",
        beschreibung: "Wechselt den Job eines Spielers"
    },
    {
        modul: "Core › jobs › meta",
        name: "Player:getJobTable",
        params: "",
        type: "shared",
        beschreibung: "Gibt die Job-Daten des Spielers zurück"
    },
    {
        modul: "Core › jobs › meta",
        name: "Player:GetRank",
        params: "",
        type: "shared",
        beschreibung: "Gibt den Rang des Jobs zurück"
    },
    {
        modul: "Core › jobs › meta",
        name: "Player:getTeamID",
        params: "",
        type: "shared",
        beschreibung: "Gibt die aktuelle Team-ID des Spielers zurück"
    },
    {
        modul: "Core › loading",
        name: "IHRPLOADING:OpenMenu",
        params: "",
        type: "client",
        beschreibung: "Öffnet den Ladebildschirm mit Fortschrittsbalken und Ladespitzen"
    },
    {
        modul: "Core › logging",
        name: "IHRPLOGS:OpenMenu",
        params: "",
        type: "client",
        beschreibung: "Öffnet das Log-System Menü (F8 für Staff)"
    },
    {
        modul: "Core › logging",
        name: "IHRPLOGS:AddLog",
        params: "category, subCategory, log, steamid64",
        type: "server",
        beschreibung: "Fügt einen neuen Log hinzu"
    },
    {
        modul: "Core › logging",
        name: "IHRPLOGS:GetLog",
        params: "category, subcategory",
        type: "server",
        beschreibung: "Gibt alle Logs einer Kategorie zurück"
    },
    {
        modul: "Core › logging",
        name: "IHRPLOGS.CreateCategory",
        params: "id, data",
        type: "shared",
        beschreibung: "Erstellt eine neue Log-Kategorie"
    },
    {
        modul: "Core › logging",
        name: "IHRPLOGS.AddSubCategory",
        params: "id, nickname",
        type: "shared", 
        beschreibung: "Fügt eine Unterkategorie zu einer Log-Kategorie hinzu"
    },
    {
        modul: "Core › money",
        name: "Player:getMoney",
        params: "",
        type: "shared",
        beschreibung: "Gibt den aktuellen Kontostand des Spielers zurück"
    },
    {
        modul: "Core › money",
        name: "Player:addMoney",
        params: "amount",
        type: "server",
        beschreibung: "Fügt dem Spieler Geld hinzu"
    },
    {
        modul: "Core › money",
        name: "Player:setMoney",
        params: "amount",
        type: "server", 
        beschreibung: "Setzt den Kontostand des Spielers auf einen bestimmten Betrag"
    },
    {
        modul: "Core › money",
        name: "Player:canAfford",
        params: "amount",
        type: "shared",
        beschreibung: "Prüft ob der Spieler sich einen bestimmten Betrag leisten kann"
    },
    {
        modul: "Core › name",
        name: "Player:SetRPName",
        params: "name",
        type: "server",
        beschreibung: "Setzt den Rollenspiel-Namen eines Spielers"
    },
    {
        modul: "Core › name",
        name: "Player:Nick",
        params: "",
        type: "shared",
        beschreibung: "Gibt den Rollenspiel-Namen des Spielers zurück (Überschreibt die Standard-Nick Funktion)"
    },
    {
        modul: "Core › name",
        name: "Player:Name",
        params: "",
        type: "shared",
        beschreibung: "Gibt den Rollenspiel-Namen des Spielers zurück (Überschreibt die Standard-Name Funktion)"
    },
    {
        modul: "Core › ranks",
        name: "Player:GetCurrentPath",
        params: "",
        type: "shared",
        beschreibung: "Gibt den aktuellen Karrierepfad des Spielers zurück"
    },
    {
        modul: "Core › ranks",
        name: "Player:GetCurrentRank",
        params: "",
        type: "shared",
        beschreibung: "Gibt den aktuellen Rang des Spielers in seinem Karrierepfad zurück"
    },
    {
        modul: "Core › ranks",
        name: "Player:GetNextRank",
        params: "",
        type: "shared",
        beschreibung: "Gibt den nächsthöheren Rang im aktuellen Karrierepfad zurück"
    },
    {
        modul: "Core › ranks",
        name: "Player:GetLowerRank",
        params: "",
        type: "shared",
        beschreibung: "Gibt den nächstniedrigeren Rang im aktuellen Karrierepfad zurück"
    },
    {
        modul: "Core › ranks",
        name: "Player:UpRank",
        params: "",
        type: "server",
        beschreibung: "Befördert den Spieler zum nächsthöheren Rang"
    },
    {
        modul: "Core › ranks",
        name: "Player:DeRank",
        params: "",
        type: "server",
        beschreibung: "Degradiert den Spieler zum nächstniedrigeren Rang"
    },
    {
        modul: "Core › spawnpoints",
        name: "SPOINTS.UpdateSpawnPoints",
        params: "",
        type: "server",
        beschreibung: "Aktualisiert die Spawnpunkt-Liste aus der Datenbank"
    },
    {
        modul: "Core › tperson",
        name: "ThirdPerson.SetEnabled",
        params: "bool",
        type: "client",
        beschreibung: "Aktiviert oder deaktiviert die Thirdperson-Ansicht"
    },
    {
        modul: "Core › voicechat",
        name: "VoiceChat:ChangeVoiceRange",
        params: "ply",
        type: "server",
        beschreibung: "Ändert die Reichweite des Voice-Chats für einen Spieler (Y-Taste)"
    },
    {
        modul: "Core › voicechat",
        name: "Player:GetVoiceRange",
        params: "",
        type: "shared",
        beschreibung: "Gibt die aktuelle Voice-Chat Einstellung des Spielers zurück"
    },
    {
        modul: "Core › webhooks",
        name: "WEBHOOK.Discord",
        params: "SystemName, data",
        type: "server",
        beschreibung: "Sendet eine Nachricht an einen Discord Webhook mit Embed Unterstützung"
    },
];


