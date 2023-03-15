"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let world = puerts_1.argv.getByName("WorldSubsystem").GetWorld();
const GameInstance = UE.GameplayStatics.GetGameInstance(world);
//const BASE_URL =  GameInstance.BaseApiUrl;

var self;

var classProperties = {
    "classes": [
        {
            "className": "DirectionalLight",
            "properties": [
                {
                    "name": "Intensity",
                    "variable_name": "light_ntensity",
                    "type": "slider",
                    "min_val": 0,
                    "max_val": 100,
                    "default_val": 30
                },
                {
                    "name": "Is Visible",
                    "variable": "visible",
                    "type": "bool",
                    "default_val": true
                }
            ]
        }
    ]
}

class yugCore {
    constructor(islandId, platformName) {
        this.islandId = islandId;
        this.platformName = platformName;
    }

    setupEditorHud() {
        console.log("a:: This is test");

        let widgetClass = UE.Class.Load("/YugRuntimeEditor/UI/HUD_UI/WB_EditorHud_v2.WB_EditorHud_v2_C");

        let widget = UE.UMGManager.CreateWidget(world, widgetClass);
        widget.AddToViewport(0);
        //console.log("Widget :: "+widget);
        return widget;
    }

    async getPublicItemsApi() {
        return new Promise(async (resolve, reject) => {
            try {
                const url = `${GameInstance.BaseApiUrl}/editor/item/public`;
                console.log(url);
                let publicItems = await UE.FetchAPI.FetchJson(url, { Method: 'GET' });

                var finalList = [];

                publicItems.OnText((jsonString, response) => {

                    finalList = JSON.parse(jsonString);
                    console.log("Get Items :: Calling Public Items")
                    resolve(finalList);
                });

            } catch (error) {

            }
        })
    }

    getTestContentApi() {
        var contentList = [
            {
                "createdDate": 1662637985437,
                "itemImageUrl": "https://storage.googleapis.com/yug-meta-external-files/KgFmwMrzcLwFHKiG1662540041063.png",
                "itemPakChunkData": {
                    "yugPlaceableBlueprintAsset": "",
                    "dependentChunkIds": [],
                    "chunkId": 0,
                    "yugPlaceableStaticMesh": ""
                },
                "itemCategory": "Glb Item",
                "itemId": "JRnDL2SIQP7hmY9z77WvOtbFziuDXcgl",
                "itemType": "Glb",
                "itemGlbUrl": "https://storage.googleapis.com/yug-meta-external-files/uIpBkwfVXv0f3VJw1662637983804.glb",
                "itemName": "Test item",
                "ownerId": "eK1P48A1qBXvYaxGKEnXN6M3W6S2"
            }, {
                "createdDate": 1662638671218,
                "itemImageUrl": "https://storage.googleapis.com/yug-meta-external-files/KgFmwMrzcLwFHKiG1662540041063.png",
                "itemPakChunkData": {
                    "yugPlaceableBlueprintAsset": "",
                    "dependentChunkIds": [],
                    "chunkId": 0,
                    "yugPlaceableStaticMesh": ""
                },
                "itemCategory": "Glb Item",
                "itemGlbUrl": "https://storage.googleapis.com/yug-meta-external-files/C5643cNmIu4d7cCq1662638670151.glb",
                "itemId": "FBx0pruOwnxxhrFtOvVdm3IrQClrge3o",
                "itemType": "Glb",
                "itemName": "Test item 2",
                "ownerId": "HLo3HaJFuJYZnvK4W0UTU2dIBGs2",
                "applicationId": "W71ND17L7N8"
            }, {
                "createdDate": 1662540233007,
                "itemImageUrl": "https://storage.googleapis.com/yug-meta-external-files/KgFmwMrzcLwFHKiG1662540041063.png",
                "itemPakChunkData": {
                    "yugPlaceableBlueprintAsset": "",
                    "dependentChunkIds": [],
                    "chunkId": 0,
                    "yugPlaceableStaticMesh": ""
                },
                "itemCategory": "userUploaded",
                "itemId": "8QQYEPXfndXvJZFmXGQofwNlRY8XAo2o",
                "itemType": "Glb",
                "itemGlbUrl": "https://storage.googleapis.com/yug-meta-external-files/y0NIbPnvNpsMcCGk1662540231686.glb",
                "itemName": "testUploadItwm",
                "ownerId": "eK1P48A1qBXvYaxGKEnXN6M3W6S2"
            }, {
                "createdDate": 1668581879916,
                "itemCategory": "editorItem",
                "visibility": "public",
                "itemGlbUrl": "https://storage.googleapis.com/yug-meta-external-files/EX07K0jTrFiIomee1668581878782.glb",
                "itemId": "6UIkYBobeSi90E5gsD6T2PkKeeSPjrpC",
                "itemDescription": "<p>gallery building</p>",
                "itemName": "Gallery_Building",
                "ownerId": "HLo3HaJFuJYZnvK4W0UTU2dIBGs2",
                "itemImageUrl": "https://storage.googleapis.com/yug-meta-external-files/zCyEC27TyNirCr4I1668581878757.jpg",
                "shortDescription": "gallery building",
                "itemPakChunkData": {
                    "yugAsset": "",
                    "yugPlaceableBlueprintAsset": "",
                    "dependentChunkIds": [],
                    "chunkId": null,
                    "yugPlaceableStaticMesh": ""
                },
                "galleryImages": [
                    {
                        "name": "Screenshot 2022-11-16 122729.jpg",
                        "url": "https://storage.googleapis.com/yug-meta-external-files/1PCMP589NvauqWhD1668581878744.jpg"
                    }
                ],
                "itemType": "GLB",
                "publishStatus": "published",
                "tags": [
                    "building"
                ],
                "applicationId": "W71ND17L7N8"
            }, {
                "createdDate": 1662542051417,
                "itemImageUrl": "https://storage.googleapis.com/yug-meta-external-files/KgFmwMrzcLwFHKiG1662540041063.png",
                "itemPakChunkData": {
                    "yugPlaceableBlueprintAsset": "",
                    "dependentChunkIds": [],
                    "chunkId": 0,
                    "yugPlaceableStaticMesh": ""
                },
                "itemCategory": "Glb Item",
                "itemId": "IK3qFQrJhCBISjpbu3WgyfMLho58VbKm",
                "itemType": "Glb",
                "itemGlbUrl": "https://storage.googleapis.com/yug-meta-external-files/CBDryqS6dSr15Qkz1662542049625.glb",
                "itemName": "Palm Tree",
                "ownerId": "eK1P48A1qBXvYaxGKEnXN6M3W6S2"
            }
        ];

        return contentList;
    }

    async setupSceneApi() {
        return new Promise(async (resolve, reject) => {
            try {
                const url = `${GameInstance.BaseApiUrl}/editor/scene/v5?prefabId=${this.islandId}&platform=${this.platformName}`;
                console.log("URL :: ", url);
                let scene = await UE.FetchAPI.FetchJson(url, { Method: 'GET' });
                var sceneJson;

                scene.OnText(async (jsonString, response) => {
                    //console.log(jsonString);
                    sceneJson = JSON.parse(jsonString);
                    if (UE.FileHelperBPLibrary.IsFile(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/Islands/${this.islandId}.json`)) {
                        await UE.FileHelperBPLibrary.RemoveFile(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/Islands/${this.islandId}.json`);
                    }

                    //console.log("Scene :: ", sceneJson);
                    await UE.FileHelperBPLibrary.SaveText(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/Islands/${this.islandId}.json`, jsonString, false, true);
                    console.log("SetupSceneAPi :: Json Saved")

                    resolve(true);
                })
            } catch (error) {

            }
        })
    }

    async readSceneFromFile() {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Read Scene Called..");
                var readText = UE.YugBPL.readTextFromFile(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/Islands/${this.islandId}.json`);
                //console.log("get from Read :: ", readText);

                var sceneJson = JSON.parse(readText);
                resolve(sceneJson);
            } catch (error) {

            }
        })
    }
}

class EditorSceneHandler {
    constructor() {
        this.jsonSceneData = null // -------- Hold JSON data of Island if any  
        this.editorItems = {};    // ----- Holds JSON of placed items in the scene
        this.placedItems = {};   // ----- Holds Objects References for each SceneId
        this.gptPlacedItems = {}; // ---------- Holds object References for Objects Spawned from GPT Request
        this.selectedItem = undefined; // --------- SceneId of currently selected object
        this.yugCoreObject = undefined;
        this.widgetRef = undefined;

        this.spawned = false;
        this.spawnedItem = null;

        this.islandId = GameInstance.Island_ID;
        //this.islandId = "v9FhkRQ08gTvlybG";  // ---------------- Sample Test Island Id
        self = this;

        setTimeout(() => {
            this.yugCoreObject = new yugCore(this.islandId, UE.GameplayStatics.GetPlatformName());
            console.log("IslandId :: " + this.islandId);
            this.widgetRef = this.yugCoreObject.setupEditorHud();
            this.populatePublicItems();
            this.initScene();
            this.handleLightingProperties();
            

            // Binding for Details Panel Transform UI when item transform is updated
            this.widgetRef.WBP_YugCustom_Details.onUpdateTransform.Add((editorHandler) => {
                if (editorHandler.CurrentActor != undefined && editorHandler.CurrentActor != null) {
                    let componentClass = UE.Class.Load("/YugRuntimeEditor/Components/MapItemComponent.MapItemComponent_C");
                    let itemComponent = editorHandler.CurrentActor.GetComponentByClass(componentClass);
                    let transform = editorHandler.GetActorTransform();

                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_LocationX.SetValue(transform["Translation"].X);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_LocationY.SetValue(transform["Translation"].Y);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_LocationZ.SetValue(transform["Translation"].Z);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_RotationX.SetValue(transform["Rotation"].Rotator().Roll); // Rotation X
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_RotationY.SetValue(transform["Rotation"].Rotator().Pitch); // Rotation Y
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_RotationZ.SetValue(transform["Rotation"].Rotator().Yaw); // Rotation Z
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_ScaleX.SetValue(transform["Scale3D"].X);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_ScaleY.SetValue(transform["Scale3D"].Y);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_ScaleZ.SetValue(transform["Scale3D"].Z);

                    if (itemComponent != undefined) {
                        console.log("Item Component Scene Id :: " + itemComponent.SceneId);
                        console.log("Item in Scene :: " + this.editorItems[itemComponent.SceneId]);

                        if (itemComponent.SceneId != undefined && itemComponent.SceneId != null && itemComponent.SceneId != "" && this.editorItems[itemComponent.SceneId] != undefined) {
                            this.editorItems[itemComponent.SceneId].ItemTransform.Translation.X = transform["Translation"].X;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Translation.Y = transform["Translation"].Y;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Translation.Z = transform["Translation"].Z;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Rotation.X = transform["Rotation"].Rotator().Roll;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Rotation.Y = transform["Rotation"].Rotator().Pitch;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Rotation.Z = transform["Rotation"].Rotator().Yaw;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Scale3D.X = transform["Scale3D"].X;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Scale3D.Y = transform["Scale3D"].Y;
                            this.editorItems[itemComponent.SceneId].ItemTransform.Scale3D.Z = transform["Scale3D"].Z;
                        } else {
                            console.log("onUpdateTransform :: Failed to Find ID in List " + itemComponent.SceneId);
                        }
                    } else {
                        console.log("onUpdateTransform :: Item Component Undefined");
                    }

                } else {
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_LocationX.SetValue(0.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_LocationY.SetValue(0.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_LocationZ.SetValue(0.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_RotationX.SetValue(0.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_RotationY.SetValue(0.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_RotationZ.SetValue(0.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_ScaleX.SetValue(1.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_ScaleY.SetValue(1.0);
                    this.widgetRef.WBP_YugCustom_Details.QuietTransformPanel.Spinner_ScaleZ.SetValue(1.0);
                }
            })

            this.widgetRef.WBP_YugCustom_Details.onValueUpdateHandle.Add((mapEditorHandler, widget) => {
                let location = new UE.Vector(0, 0, 0);
                let rotation = { X: 0, Y: 0, Z: 0 };
                let scale3D = new UE.Vector(0, 0, 0);
                let transform = new UE.Transform();

                location.X = widget.Spinner_LocationX.InternalValue;
                location.Y = widget.Spinner_LocationY.InternalValue;
                location.Z = widget.Spinner_LocationZ.InternalValue;
                rotation.X = widget.Spinner_RotationX.InternalValue; // Rotation X -- Roll
                rotation.Y = widget.Spinner_RotationY.InternalValue; // Rotation Y -- Pitch
                rotation.Z = widget.Spinner_RotationZ.InternalValue; // Rotation Z -- Yaw
                scale3D.X = widget.Spinner_ScaleX.InternalValue;
                scale3D.Y = widget.Spinner_ScaleY.InternalValue;
                scale3D.Z = widget.Spinner_ScaleZ.InternalValue;

                transform.Translation = location;
                transform.Rotation = undefined;
                transform.Scale3D = scale3D;

                let rot = new UE.Rotator(rotation.Y, rotation.Z, rotation.X);

                mapEditorHandler.SetActorTransform(transform);
                mapEditorHandler.CurrentActor.K2_SetActorRotation(rot, false);
                console.log(rot.ToString())

                this.widgetRef.updateUI();
            });

            // Binding for when an object is deleted from scene
            this.widgetRef.WBP_YugCustomTransformSettings.onDeleteItemCalled.Add((type, sceneId, script) => {
                if (type == "SceneItem") {
                    console.log("Deleting item with id " + sceneId);
                    if (this.editorItems[sceneId] != undefined) {
                        delete this.editorItems[sceneId];
                    } else {
                        console.log(sceneId + " item does not exist!");
                    }
                }

                if (type == "Script") {
                    console.log("Deleting script  " + script);
                }
            });

            // Binding for when Chat Gpt prompt is executed and json is received
            this.widgetRef.WBP_GPT_ChatWindow.onExecutePrompt.Add((detailId, gptStringJson, gptwidget) => {
                let gptScene = JSON.parse(gptStringJson);
                //this.handleExistingScene(gptScene.scene);
                this.handleGptSceneSpawn(detailId, gptScene.baseScenePrefab.scene, gptwidget);

                // Add Prefab received from GPT to main scene json
                gptScene.baseScenePrefab.scene.prefabs.forEach(prefab => {
                    if (!this.jsonSceneData.baseScenePrefab.scene.prefabs.includes(prefab, 0)) {
                        this.jsonSceneData.baseScenePrefab.scene.prefabs.push(prefab);
                    }
                })
            })

            // Binding for Island Host Status changed
            this.widgetRef.onHostServerChanged.Add((isHosted)=>{
                if(isHosted){
                    this.jsonSceneData.island.travelType = "ServerHosted"
                } else {
                    this.jsonSceneData.island.travelType = "ClientOnly"
                }
            })

            // Binding for Island Name Changed
            this.widgetRef.onIslandNameChanged.Add((newIslandName)=>{
                this.jsonSceneData.island.islandName = newIslandName;
            })

            // Binding for when item dropped on reference property
            /*this.widgetRef.WBP_YugCustom_Details.CustomVar_Reference.onSceneItemDrop.Add((ref_sceneId, ref_itemName, parent_sceneId)=>{
                console.log("Ref Id :: " + ref_sceneId + "  ParentId :: " + parent_sceneId);
                console.log("Box Ref :: itemDropped onto Box");
                this.widgetRef.WBP_YugCustom_Details.CustomVar_Reference.Id_Block.SetText(ref_sceneId);
                this.widgetRef.WBP_YugCustom_Details.CustomVar_Reference.ReferenceBox.SetText(ref_itemName);
                this.editorItems[parent_sceneId].children.push(ref_sceneId);
    
                console.log("Item Dropped :: " + JSON.stringify(this.editorItems[parent_sceneId]));
            })*/

            // Binding when custom variable is added to an Object
            this.widgetRef.WBP_YugCustom_Details.onVariableAdded.Add(this.handleOnCustomVariableAdded);

            // Binding for handling Update Properties when actor is selected
            /*this.widgetRef.updateProperties.Add((editorHandler)=>{
                if(editorHandler.CurrentActor != undefined){
                    //console.log(UE.KismetSystemLibrary.GetDisplayName(editorHandler.CurrentActor.GetClass()))
                    
                    let propertyHolderClass = UE.Class.Load("/YugRuntimeEditor/QuietDockingSystem/UMG/YugCustom/Properties/PropertyHolder.PropertyHolder_C")
                    let propertyWidget = UE.UMGManager.CreateWidget(world, propertyHolderClass);
    
                    if(UE.KismetSystemLibrary.GetDisplayName(editorHandler.CurrentActor.GetClass()) == "DirectionalLight"){
                        console.log("Directional Light has been selected");
                        propertyWidget.Text_Title.SetText("Directional Light");
                        this.widgetRef.WBP_YugCustom_Details.AllProperties.AddChildToVerticalBox(propertyWidget);
    
                        this.showProperties("DirectionalLight", propertyWidget);
                    }
                }
            })*/

            // Binding for Saving scene in json file
            this.widgetRef.onSaveCalled.Add(async () => {
                this.jsonSceneData.baseScenePrefab.scene.scripts = {};
                this.jsonSceneData.baseScenePrefab.scene.editableItems = {};
                //console.log(this.widgetRef.scriptsInScene.Num())

                for (var i = 0; i < this.widgetRef.scriptsInScene.Num(); i++) {
                    //this.jsonSceneData.baseScenePrefab.scene.scripts.push(this.widgetRef.scriptsInScene.Get(i));
                    //this.jsonSceneData.baseScenePrefab.scene.scripts[this.widgetRef.scriptsInScene.Get(i)] = null

                    console.log(this.widgetRef.scriptsInScene.Get(i).ScriptDisplayName)

                    this.jsonSceneData.baseScenePrefab.scene.scripts[this.widgetRef.scriptsInScene.Get(i).ScriptDisplayName] = {
                        scriptName: this.widgetRef.scriptsInScene.Get(i).ScriptDisplayName,
                        scriptValue: this.widgetRef.scriptsInScene.Get(i).script
                    };
                }
                let id = this.islandId;
                //let id = "v9FhkRQ08gTvlybG";  // ---------------- Sample Test Scene Id

                this.jsonSceneData.baseScenePrefab.scene.editableItems = this.editorItems;

                console.log("Handler :: Save Called for " + id);
                //console.log("HandleOnSave :: Json Saved " + JSON.stringify(this.editorItems));
                console.log("HandleOnSave :: Json Saved " + JSON.stringify(this.jsonSceneData));

                await UE.FileHelperBPLibrary.SaveText(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/Islands/${id}_Autosave.json`, JSON.stringify(this.jsonSceneData), undefined, false, true);

                // Upload Saved Json to Server

                let url = `${GameInstance.BaseApiUrl}/editor/scene`;
                console.log(url);

                let jsonServerSave = await UE.FetchAPI.Fetch(url, new UE.FetchOptions(UE.FFetchOptionsMethod.PUT, JSON.stringify(this.jsonSceneData), UE.NewArray(UE.FetchHeader)));
                jsonServerSave.OnText((jsonString, response) => {
                    console.log("Received :: " + jsonString);
                    console.log("Save to Server ResponseCode :: " + response.StatusCode);

                    console.log("Save on Server Complete!!")
                    if (response.StatusCode >= 200 && response.StatusCode < 300) {
                        //this.widgetRef.WBP_StatusBar.UpdateStatusBox(false, "Save Completed!!")

                        this.widgetRef.JSNotifySaveComplete(true);
                    } else {
                        //this.widgetRef.WBP_StatusBar.UpdateStatusBox(false, "Save Failed!!")

                        this.widgetRef.JSNotifySaveComplete(false);
                    }
                });
            });
        }, 1000)
    }

    // Handle Populate Properties UI for Selected Object in Scene
    /*showProperties(type, widget){
        let boolProperty = UE.Class.Load("/YugRuntimeEditor/QuietDockingSystem/UMG/YugCustom/Properties/WBP_YugBoolProperty.WBP_YugBoolProperty_C")
        let sliderProperty = UE.Class.Load("/YugRuntimeEditor/QuietDockingSystem/UMG/YugCustom/Properties/WBP_YugSliderProperty.WBP_YugSliderProperty_C")

        classProperties.classes.forEach(actor => {
            if(actor.className == type){
                actor.properties.forEach(prop => {
                    if(prop.type == "bool"){
                        let propWidget = UE.UMGManager.CreateWidget(world, boolProperty);
                        propWidget.VarName.SetText();
                        widget.Properties.AddChild(propWidget);
                    }
                })
            }
        })
    }*/

    // ------------------ Handle SceneJson from Chat GPT ----------------------------

    handleGptSceneSpawn(detailId, gptSceneJson, gptWidget) {
        let outlinerTreeClass = UE.Class.Load("/YugRuntimeEditor/QuietDockingSystem/UMG/YugCustom/BP_YugCustom_QuietTreeManager.BP_YugCustom_QuietTreeManager_C")
        let outlinerTree = UE.GameplayStatics.GetActorOfClass(world, outlinerTreeClass);

        let itemClass = UE.Class.Load("/Script/Engine.StaticMeshActor");
        let itemComponentClass = UE.Class.Load("/YugRuntimeEditor/Components/MapItemComponent.MapItemComponent_C");
        let scriptClass = UE.Class.Load("/YugRuntimeEditor/Objects/Script/A_Script.A_Script_C");
        let umapLoader = UE.Class.Load("/YugRuntimeEditor/Loader/v2_UMapsLoader.v2_UMapsLoader_C");
        let prefabLoader = UE.Class.Load("/YugRuntimeEditor/Loader/v2_PrefabsLoader.v2_PrefabsLoader_C");

        console.log("Gpt scene item load started")
        if (gptSceneJson != undefined) {
            // Loop through each prefab and spawn items in scene
            gptSceneJson.prefabs.forEach(pref => {
                console.log(pref.scene.id);
                let prefItems = UE.NewArray(UE.Actor);

                if (detailId != "") {
                    console.log("Detail called for :: " + detailId);
                    if (pref.scene.id == detailId) {
                        this.deleteExistingGptItems(detailId);
                    }
                }

                for (var i in pref.scene.editableItems) {
                    if (self.gptPlacedItems[pref.scene.id] != undefined) {
                        if (self.gptPlacedItems[pref.scene.id][i] != undefined) {
                            console.log(i + "item already placed");
                            continue;
                        }
                    }
                    console.log(i);

                    if (pref.scene.editableItems[i].itemType.toUpperCase() != "BLUEPRINT") {
                        var item = world.SpawnActor(itemClass, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);
                        var itemComponent = item.AddComponentByClass(itemComponentClass, false, undefined, false);
                        let location = new UE.Vector(pref.scene.editableItems[i].ItemTransform.Translation.X, pref.scene.editableItems[i].ItemTransform.Translation.Y, pref.scene.editableItems[i].ItemTransform.Translation.Z);
                        let rotation = new UE.Rotator(pref.scene.editableItems[i].ItemTransform.Rotation.Y, pref.scene.editableItems[i].ItemTransform.Rotation.Z, pref.scene.editableItems[i].ItemTransform.Rotation.X);
                        let scale = new UE.Vector(pref.scene.editableItems[i].ItemTransform.Scale3D.X, pref.scene.editableItems[i].ItemTransform.Scale3D.Y, pref.scene.editableItems[i].ItemTransform.Scale3D.Z);
                        console.log("Item Rotation :: " + rotation.ToString());

                        item.K2_SetActorLocation(location, false, undefined, true);
                        item.K2_SetActorRotation(rotation, false)
                        item.SetActorScale3D(scale);
                    }

                    if (pref.scene.editableItems[i].itemType.toUpperCase() == "GLB") {
                        let itemMesh = pref.scene.editableItems[i].ItemMesh;
                        let glbFileName = itemMesh.split("/");

                        console.log(itemMesh);
                        console.log(glbFileName[glbFileName.length - 1]);
                        console.log(item, location.ToString());

                        itemComponent.StartLoadGlb(glbFileName[glbFileName.length - 1], itemMesh);
                    }

                    if (pref.scene.editableItems[i].itemType.toUpperCase() == "STATICMESH") {
                        //let itemMesh = UE.StaticMesh.Load(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemMesh);
                        let dependentChunks = UE.NewArray(UE.BuiltinInt);

                        pref.scene.editableItems[i].dependentChunkIds.forEach(ele => {
                            dependentChunks.Add(ele);
                        })

                        itemComponent.setChunkData(pref.scene.editableItems[i].chunkId, dependentChunks)

                        //console.log(itemMesh);
                        itemComponent.StartLoadChunkItem(pref.scene.editableItems[i].ItemMesh);
                        //console.log(item);
                        //itemComponentClass.SetMeshOnSpawn(itemMesh);
                        //await item.SetItemData("" , sceneJson[i].itemType, sceneJson[i].itemId, sceneJson[i].sceneId);
                    }

                    if (pref.scene.editableItems[i].itemType.toUpperCase() == "BLUEPRINT") {
                        var temp_Item = world.SpawnActor(itemClass, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);
                        var temp_ItemComponent = temp_Item.AddComponentByClass(itemComponentClass, false, undefined, false);

                        let temp_location = new UE.Vector(pref.scene.editableItems[i].ItemTransform.Translation.X, pref.scene.editableItems[i].ItemTransform.Translation.Y, pref.scene.editableItems[i].ItemTransform.Translation.Z);
                        let temp_rotation = new UE.Rotator(pref.scene.editableItems[i].ItemTransform.Rotation.Y, pref.scene.editableItems[i].ItemTransform.Rotation.Z, pref.scene.editableItems[i].ItemTransform.Rotation.X);
                        let temp_scale = new UE.Vector(pref.scene.editableItems[i].ItemTransform.Scale3D.X, pref.scene.editableItems[i].ItemTransform.Scale3D.Y, pref.scene.editableItems[i].ItemTransform.Scale3D.Z);

                        if (pref.scene.editableItems[i].chunkId != null) {
                            let dependentChunks = UE.NewArray(UE.BuiltinInt);

                            pref.scene.editableItems[i].dependentChunkIds.forEach(ele => {
                                dependentChunks.Add(ele);
                            })

                            temp_ItemComponent.setChunkData(pref.scene.editableItems[i].chunkId, dependentChunks);
                        }

                        temp_ItemComponent.LoadBlueprintChunk(temp_location, temp_rotation, temp_scale, pref.scene.editableItems[i].ActorToSpawn, pref.scene.editableItems[i].itemDisplayName);
                        temp_ItemComponent.SetItemData("", pref.scene.editableItems[i].itemType, pref.scene.editableItems[i].itemId, pref.scene.editableItems[i].sceneId);
                    }

                    console.log(pref.scene.editableItems[i].itemType, pref.scene.editableItems[i].itemId, pref.scene.editableItems[i].sceneId);

                    if (item != undefined && item != null && pref.scene.editableItems[i].itemType.toUpperCase() != "BLUEPRINT") {
                        itemComponent.SetItemData("", pref.scene.editableItems[i].itemType, pref.scene.editableItems[i].itemId, pref.scene.editableItems[i].sceneId);

                        prefItems.Add(item);

                        if (self.gptPlacedItems[pref.scene.id] != undefined) {
                            self.gptPlacedItems[pref.scene.id][i] = item;
                        } else {
                            self.gptPlacedItems[pref.scene.id] = {};
                            self.gptPlacedItems[pref.scene.id][i] = item;
                        }

                        if (pref.scene.editableItems[i].itemDisplayName != undefined && pref.scene.editableItems[i].itemDisplayName != null) {
                            self.widgetRef.addToOutlinerTree(item, pref.scene.editableItems[i].itemDisplayName);
                        } else {
                            self.widgetRef.addToOutlinerTree(item, pref.scene.editableItems[i].itemId);
                        }
                    }
                }

                if (self.gptPlacedItems[pref.scene.id] != undefined || self.gptPlacedItems[pref.scene.id] != null) {
                    console.log("Prefabs to Add :: " + pref.scene.id + " " + prefItems.Num())
                    gptWidget.AddChildToGeneratedGroups(pref.scene.id, puerts_1.$ref(prefItems));
                } else {
                    console.log(pref.scene.id + " :: ")
                }
                this.handleGptSceneSpawn(detailId, pref.scene, gptWidget);
            })
        }
    }

    deleteExistingGptItems(id) {
        if (self.gptPlacedItems[id] != null && self.gptPlacedItems[id] != undefined) {
            for (var item in self.gptPlacedItems[id]) {
                self.gptPlacedItems[id][item].K2_DestroyActor();
                delete self.gptPlacedItems[id][item];
            }
        }
    }

    // ------------------ End of Handle SceneJson from Chat GPT ----------------------------

    // --------------------- Handle Existing SceneJson Received --------------------------

    handleExistingScene(sceneJsonString) {
        //console.log(JSON.stringify(sceneJsonString));  // ------------------------- Debug Scene Json
        if(sceneJsonString.island.travelType === "ServerHosted"){
            this.widgetRef.WBP_ToolbarItem_HostBtn.HandleOnPressed();
        }

        this.widgetRef.WBP_ToolbarItem_Islandname.SetText(sceneJsonString.island.islandName);

        let itemClass = UE.Class.Load("/Script/Engine.StaticMeshActor");
        let itemComponentClass = UE.Class.Load("/YugRuntimeEditor/Components/MapItemComponent.MapItemComponent_C");
        let scriptClass = UE.Class.Load("/YugRuntimeEditor/Objects/Script/A_Script.A_Script_C");
        let umapLoader = UE.Class.Load("/YugRuntimeEditor/Loader/v2_UMapsLoader.v2_UMapsLoader_C");
        let prefabLoader = UE.Class.Load("/YugRuntimeEditor/Loader/v2_PrefabsLoader.v2_PrefabsLoader_C");

        // Handle Spawn Scene Items
        for (var i in sceneJsonString.baseScenePrefab.scene.editableItems) {
            console.log(i);

            if (sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType.toUpperCase() != "BLUEPRINT") {
                var item = world.SpawnActor(itemClass, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);
                var itemComponent = item.AddComponentByClass(itemComponentClass, false, undefined, false);
                let location = new UE.Vector(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Translation.X, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Translation.Y, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Translation.Z);
                let rotation = new UE.Rotator(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Rotation.Y, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Rotation.Z, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Rotation.X);
                let scale = new UE.Vector(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Scale3D.X, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Scale3D.Y, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Scale3D.Z);
                console.log("Item Rotation :: " + rotation.ToString());

                item.K2_SetActorLocation(location, false, undefined, true);
                item.K2_SetActorRotation(rotation, false)
                item.SetActorScale3D(scale);
            }

            if (sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType.toUpperCase() == "GLB") {
                let itemMesh = sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemMesh;
                let glbFileName = itemMesh.split("/");

                console.log(itemMesh);
                console.log(glbFileName[glbFileName.length - 1]);

                itemComponent.StartLoadGlb(glbFileName[glbFileName.length - 1], itemMesh);
            }

            if (sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType.toUpperCase() == "STATICMESH") {
                //let itemMesh = UE.StaticMesh.Load(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemMesh);
                let dependentChunks = UE.NewArray(UE.BuiltinInt);

                sceneJsonString.baseScenePrefab.scene.editableItems[i].dependentChunkIds.forEach(ele => {
                    dependentChunks.Add(ele);
                })

                itemComponent.setChunkData(sceneJsonString.baseScenePrefab.scene.editableItems[i].chunkId, dependentChunks)

                //console.log(itemMesh);
                itemComponent.StartLoadChunkItem(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemMesh);
                //console.log(item);
                //itemComponentClass.SetMeshOnSpawn(itemMesh);
                //await item.SetItemData("" , sceneJson[i].itemType, sceneJson[i].itemId, sceneJson[i].sceneId);
            }

            if (sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType.toUpperCase() == "BLUEPRINT") {
                var temp_Item = world.SpawnActor(itemClass, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);
                var temp_ItemComponent = temp_Item.AddComponentByClass(itemComponentClass, false, undefined, false);

                let temp_location = new UE.Vector(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Translation.X, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Translation.Y, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Translation.Z);
                let temp_rotation = new UE.Rotator(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Rotation.Y, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Rotation.Z, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Rotation.X);
                let temp_scale = new UE.Vector(sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Scale3D.X, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Scale3D.Y, sceneJsonString.baseScenePrefab.scene.editableItems[i].ItemTransform.Scale3D.Z);

                if (sceneJsonString.baseScenePrefab.scene.editableItems[i].chunkId != null) {
                    let dependentChunks = UE.NewArray(UE.BuiltinInt);

                    sceneJsonString.baseScenePrefab.scene.editableItems[i].dependentChunkIds.forEach(ele => {
                        dependentChunks.Add(ele);
                    })

                    temp_ItemComponent.setChunkData(sceneJsonString.baseScenePrefab.scene.editableItems[i].chunkId, dependentChunks);
                }

                temp_ItemComponent.LoadBlueprintChunk(temp_location, temp_rotation, temp_scale, sceneJsonString.baseScenePrefab.scene.editableItems[i].ActorToSpawn, sceneJsonString.baseScenePrefab.scene.editableItems[i].itemDisplayName);
                temp_ItemComponent.SetItemData("", sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType, sceneJsonString.baseScenePrefab.scene.editableItems[i].itemId, sceneJsonString.baseScenePrefab.scene.editableItems[i].sceneId);
            }

            console.log(sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType, sceneJsonString.baseScenePrefab.scene.editableItems[i].itemId, sceneJsonString.baseScenePrefab.scene.editableItems[i].sceneId);

            if (item != undefined && item != null && sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType.toUpperCase() != "BLUEPRINT") {
                itemComponent.SetItemData("", sceneJsonString.baseScenePrefab.scene.editableItems[i].itemType, sceneJsonString.baseScenePrefab.scene.editableItems[i].itemId, sceneJsonString.baseScenePrefab.scene.editableItems[i].sceneId);
                self.placedItems[i] = item;

                if (sceneJsonString.baseScenePrefab.scene.editableItems[i].itemDisplayName != undefined && sceneJsonString.baseScenePrefab.scene.editableItems[i].itemDisplayName != null) {
                    self.widgetRef.addToOutlinerTree(item, sceneJsonString.baseScenePrefab.scene.editableItems[i].itemDisplayName);
                } else {
                    self.widgetRef.addToOutlinerTree(item, sceneJsonString.baseScenePrefab.scene.editableItems[i].itemId);
                }
            }

            self.editorItems[i] = sceneJsonString.baseScenePrefab.scene.editableItems[i];
        }

        // Handle Spawn Unreal Maps
        sceneJsonString.baseScenePrefab.scene.unrealMaps.forEach(umap => {
            /*let packageStruct = UE.UserDefinedStruct.Load("UserDefinedStruct'/Game/YG_Test/Meta_Test/Blueprints/Data/Structs/Struct_RemotePackagedObjectInfo.Struct_RemotePackagedObjectInfo'");
            let packagesArr =  UE.NewArray(packageStruct);

            packageStruct.PakDownloadUrl = umap.mapPackage.pakURL;
            packageStruct.PakVersion = umap.mapPackage.pakVersion;
            packageStruct.Package_Name = umap.mapPackage.pakName;
            packageStruct.RelativeMountPoint = "";
            packagesArr.push(packageStruct);

            umap.referencedContentPackages.forEach(refPak => {
                packageStruct.PakDownloadUrl = refPak.contentPakUrl;
                packageStruct.PakVersion = refPak.packageVersion;
                packageStruct.Package_Name = refPak.contentPakName;
                packageStruct.RelativeMountPoint = contentPakMountPoint;
                packagesArr.push(packageStruct);
            })

            let mapStruct = UE.UserDefinedStruct.Load("UserDefinedStruct'/YugRuntimeEditor/Loader/Data/v1_Struct_UnrealMaps.v1_Struct_UnrealMaps'");

            mapStruct.MapName = umap.mapPackage.mapPathName
            mapStruct.MapLocation = new UE.Vector(umap.Position.x, umap.Position.y, umap.Position.z);
            mapStruct.MapRotation = new UE.Rotator(umap.Rotation.y, umap.Rotation.z, umap.Rotation.x);*/

            let mapActor = world.SpawnActor(umapLoader, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);
            mapActor.updatePackagesToDownload(umap.mapPackage.pakURL, parseFloat(umap.mapPackage.pakVersion), umap.mapPackage.pakName, "");
            umap.referencedContentPackages.forEach(refPak => {
                mapActor.updatePackagesToDownload(refPak.contentPakUrl, parseFloat(refPak.packageVersion), refPak.contentPakName, refPak.contentPakMountPoint);
            })

            //console.log("Map Name :: " + umap.mapPackage.mapPathName + " Location :: " + new UE.Vector(umap.Position.x, umap.Position.y, umap.Position.z).ToString() + " Rotation :: " + new UE.Rotator(umap.Rotation.y, umap.Rotation.z, umap.Rotation.x).ToString())
            mapActor.setMapData(umap.mapPackage.mapPathName, new UE.Vector(umap.Position.x, umap.Position.y, umap.Position.z), new UE.Rotator(umap.Rotation.y, umap.Rotation.z, umap.Rotation.x));
        })

        // Handle Scene Prefabs
        sceneJsonString.baseScenePrefab.scene.prefabs.forEach(prefab => {
            let prefabActor = world.SpawnActor(prefabLoader, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);
            prefabActor.LoadPrefabDataFromJS(JSON.stringify(prefab));
        })

        // Handle Script Execution
        if (sceneJsonString.baseScenePrefab.scene.scripts != null && sceneJsonString.baseScenePrefab.scene.scripts != undefined) {

            /*sceneJsonString.baseScenePrefab.scene.scripts.forEach(element => {
                console.log("Script to Spawn ::" + element);
                let scriptActor = world.SpawnActor(scriptClass, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);

                scriptActor.setScript(element, element, true);
                self.widgetRef.addToOutlinerTree(scriptActor, element);
            });*/

            //console.log("Scripts :: " + JSON.stringify(sceneJsonString.baseScenePrefab.scene.scripts))

            for (var script in sceneJsonString.baseScenePrefab.scene.scripts) {
                console.log("Script to Spawn ::" + script);

                let scriptActor = world.SpawnActor(scriptClass, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);

                scriptActor.setScript(sceneJsonString.baseScenePrefab.scene.scripts[script].scriptName, sceneJsonString.baseScenePrefab.scene.scripts[script].scriptValue, false);
                self.widgetRef.addToOutlinerTree(scriptActor, script);
            }
        } else {
            console.log("Editor :: No Scripts Found to Spawn !! ")
        }
    }

    // ------------------------------------ End Handle SceneJson Received -------------------------------------------------

    // Handle Lighting Properties load in scene
    handleLightingProperties() {
        let treeManagerClass = UE.Class.Load("/YugRuntimeEditor/QuietDockingSystem/UMG/YugCustom/BP_YugCustom_QuietTreeManager.BP_YugCustom_QuietTreeManager_C");
        let quietreeManager = UE.GameplayStatics.GetActorOfClass(world, treeManagerClass);

        if (quietreeManager != undefined) {
            quietreeManager.loadLightingProperties.Add((skySphere, directionalLight, skyLight) => {
                if (directionalLight != undefined && skySphere != undefined) {
                    directionalLight.LightComponent.SetMobility(UE.EComponentMobility.Movable);
                    directionalLight.LightComponent.SetIntensity(2);
                    directionalLight.K2_SetActorRotation(new UE.Rotator(-75, 0, 0), false);
                    skySphere["Directional light actor"] = directionalLight;
                    skySphere.UpdateSunDirection();
                    skyLight.LightComponent.RecaptureSky();

                } else {
                    console.log("Directional Light or Sky Sphere not Found");
                }
            })
        } else {
            console.log("Tree Manager Undefined!")
        }
    }

    // ------------ Handler for Custom Variable added to Actor/Object in Scene -----------------
    handleOnCustomVariableAdded(selectedObjectSceneId, varName, varType, varWidget) {
        console.log("Add custom variable called..")
        // console.log(JSON.stringify(self.editorItems));
        // console.log("Variable parameters received :: " ,selectedObjectSceneId, varName, varType, varWidget)

        if (self.editorItems[selectedObjectSceneId] != undefined) {

            //console.log(this.editorItems);

            //this.editorItems[selectedObjectSceneId].itemProperties.push(varName);

            if (varType == "bool") {
                self.editorItems[selectedObjectSceneId].itemProperties[varName] = false;
            } else {
                self.editorItems[selectedObjectSceneId].itemProperties[varName] = null;
            }

            varWidget.onVarValueCommited.Add(this.handleOnCustomVariableUpdated);
        }
    }

    // ------------ Handler for Custom Variable updates --------------------------
    handleOnCustomVariableUpdated() {
        console.log("Updated Variable")
    }

    // -------------------- Populate Asset Library -------------------------
    async populatePublicItems() {
        if (this.widgetRef.WBP_YugQuietBrowser.MapEditorHandler != null || this.widgetRef.WBP_YugQuietBrowser.MapEditorHandler != undefined) {
            let contentResponse = await this.yugCoreObject.getTestContentApi();
            await this.handlePopulateItems("");
            let apiResponse = await this.yugCoreObject.getPublicItemsApi();
            //console.log(apiResponse);
            await UE.FileHelperBPLibrary.SaveText(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/publicitems.json`, JSON.stringify(apiResponse), undefined, false, true);


            let buttonClass = UE.Class.Load("/YugRuntimeEditor/UI/WB_CS_ChunkMapItem.WB_CS_ChunkMapItem_C");
            let itemStruct = UE.UserDefinedStruct.Load("UserDefinedStruct'/YugRuntimeEditor/UI/Data/Struct_UI_ChunkListItem.Struct_UI_ChunkListItem'");
            let chunkStruct = UE.UserDefinedStruct.Load("UserDefinedStruct'/YugRuntimeEditor/UI/Data/Struct_UI_ItemChunkData.Struct_UI_ItemChunkData'");
            let componentClass = UE.Class.Load("/YugRuntimeEditor/Components/MapItemComponent.MapItemComponent_C");
            let itemClassToLoad = "/Script/Engine.StaticMeshActor";
            //let itemClass = UE.Class.Load(itemClassToLoad);

            var rowCount = 0;
            var colCount = 0;

            apiResponse.forEach(item => {

                //console.log(item.itemName);
                //console.log("dependent chunk for " + item.itemPakChunkData.chunkId + " :: " + item.itemPakChunkData.dependentChunkIds)
                let dependentChunks = UE.NewArray(UE.BuiltinInt);

                item.itemPakChunkData.dependentChunkIds.forEach(ele => {
                    dependentChunks.Add(ele);
                })

                let chunkData = UE.NewStruct(chunkStruct);
                chunkData.chunkId = item.itemPakChunkData.chunkId;
                chunkData.dependentChunkkIds = dependentChunks;
                chunkData.yugPlaceableStaticMesh = item.itemPakChunkData.yugPlaceableStaticMesh;
                chunkData.yugPlaceableBlueprintAsset = item.itemPakChunkData.yugPlaceableBlueprintAsset;

                var itemData = UE.NewStruct(itemStruct);
                itemData.itemId = item.itemId;
                itemData.itemName = item.itemName;
                itemData.itemImageUrl = item.itemImageUrl;
                itemData.itemType = item.itemType;
                itemData.itemCategory = item.itemCategory;
                itemData.itemGlbUrl = item.itemGlbUrl;
                itemData.itemPakChunkData = chunkData;

                // ---------- Check Chunk Status ------------
                //let status = UE.ChunkCore.GetChunkStatus(chunkData.chunkId);
                //console.log("Chunk Status for " + chunkData.chunkId + " :: "+ UE.EChunkCoreStatus[status] + " - " + status)

                let size = UE.Vector2D;
                size.X = 112;
                size.Y = 145;

                let itemWidget = UE.UMGManager.CreateWidget(world, buttonClass);
                //console.log("Chunk Data :: " + item.itemPakChunkData.chunkId + item.itemPakChunkData.yugPlaceableStaticMesh);
                itemWidget.getDataFromJS(this.widgetRef.WBP_YugQuietBrowser.MapEditorHandler, itemData, size);
                //this.widgetRef.WBP_YugAssetLibrary.Uniform_Content.AddChildToUniformGrid(itemWidget, rowCount, colCount);
                this.widgetRef.WBP_YugAssetLibrary.Uniform_Wrap.AddChildToWrapBox(itemWidget);

                /*------------------ Handling on Item Dragged in Scene ---------------------*/

                itemWidget.onItemDragged.Add(async (sceneItem) => {
                    console.log("Item Dragged in Scene :: Called in Asset Library")

                    let itemType = itemWidget.ChunkMapItem.itemType;
                    let sceneId = UE.KismetMathLibrary.RandomIntegerInRange(1000, 9999);
                    let itemMesh;
                    let chunkId = null;
                    let dependentChunkIds = [];

                    if (itemType.toUpperCase() == "GLB") {
                        let item = sceneItem;
                        itemMesh = itemWidget.ChunkMapItem.itemGlbUrl;
                        let itemComponent = item.GetComponentByClass(componentClass);

                        //item.K2_SetActorRotation(new UE.Rotator(-90,0,0),false);

                        await itemComponent.SetItemData(itemWidget.getPrefabId(), itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId, itemWidget.ChunkMapItem.itemName);
                        console.log(itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId);
                        //itemWidget.addToOutlinerTree(item, itemWidget.ChunkMapItem.itemName);

                        if (item != undefined && item != null) {
                            this.placedItems[sceneId] = item;
                        }
                    }

                    if (itemType.toUpperCase() == "STATICMESH") {
                        let item = sceneItem;
                        itemMesh = itemWidget.ChunkMapItem.itemPakChunkData.yugPlaceableStaticMesh;
                        chunkId = itemWidget.ChunkMapItem.itemPakChunkData.chunkId;

                        for (var i = 0; i < itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds.Num(); i++) {
                            dependentChunkIds.push(itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds.Get(i));
                        }

                        //dependentChunkIds = itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds;    
                        let itemComponent = item.GetComponentByClass(componentClass);

                        await itemComponent.SetItemData(itemWidget.getPrefabId(), itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId, itemWidget.ChunkMapItem.itemName);
                        console.log(itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId);
                        //itemWidget.addToOutlinerTree(item, itemWidget.ChunkMapItem.itemName);

                        if (item != undefined && item != null) {
                            this.placedItems[sceneId] = item;
                        }
                    }

                    let transform = itemWidget.MapEditorHandler.GetActorTransform();

                    let editorItem = {
                        "sceneId": sceneId,
                        "itemId": itemWidget.ChunkMapItem.itemId,
                        "itemDisplayName": itemWidget.ChunkMapItem.itemName,
                        "itemType": itemType,
                        "ItemTransform": {
                            "Rotation": {
                                "X": transform["Rotation"].Rotator().Roll,
                                "Y": transform["Rotation"].Rotator().Pitch,
                                "Z": transform["Rotation"].Rotator().Yaw
                            },
                            "Scale3D": {
                                "X": transform["Scale3D"].X,
                                "Y": transform["Scale3D"].Y,
                                "Z": transform["Scale3D"].Z
                            },
                            "Translation": {
                                "X": transform["Translation"].X,
                                "Y": transform["Translation"].Y,
                                "Z": transform["Translation"].Z
                            }
                        },
                        "ItemMesh": itemMesh,
                        "dependentChunkIds": dependentChunkIds,
                        "itemProperties": [],
                        "ActorToSpawn": itemClassToLoad,
                        "ActorTags": [],
                        "chunkId": chunkId,
                        "children": [],
                        "script": null
                    }

                    //console.log("Added Item :: " + JSON.stringify(editorItem));

                    if (editorItem != undefined && editorItem != null) {
                        this.editorItems[sceneId] = editorItem;
                        console.log("Added Item to List :: " + JSON.stringify(editorItem));
                    }
                })

                /*------------------ End Handling on Item Dragged in Scene -----------------*/


                /*------------------ Handling on Item Place Completed in Scene ---------------------*/
                itemWidget.ItemPlaced.Add((itemData) => {

                    //console.log(sceneItem.K2_GetActorLocation().ToString());
                    // for(var i in itemData){
                    //     console.log(i);
                    // }
                    //console.log("Dropped Item :: " + a + "  " + sceneItem);
                })

                /*------------------ End Handling on Item Place Completed in Scene -----------------*/

                // Update Row and Column for adding widget in Uniform Grid
                if (colCount == 2) {
                    rowCount++;
                    colCount = 0;
                } else {
                    colCount++;
                }
            });

        } else {
            setTimeout(() => {
                this.populatePublicItems()
            }, 1000);
        }
    }

    // ------------------ Populate Content Browser -------------------------
    handlePopulateItems(apiResponse) {
        let timeoutCount = 0;
        let widgetRef = this.widgetRef;
        let downloadedItems = function(){
            if (UE.FileHelperBPLibrary.IsFile(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/publicitems.json`)) {
                let allItems = UE.YugBPL.readTextFromFile(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/publicitems.json`);
                apiResponse = JSON.parse(allItems);

                // let testAr = UE.NewArray(UE.BuiltinString)
                // let arr = UE.BlueprintFileUtilsBPLibrary.FindFiles(`${UE.BlueprintPathsLibrary.ProjectPersistentDownloadDir()}/PakCache`, puerts_1.$ref(testAr), "");
                // console.log("Files :: " + arr + " " + testAr.Num())
                //var arr = UE.FileSystemOperation.GetFiles(`${UE.BlueprintPathsLibrary.ProjectPersistentDownloadDir()}/PakCache`);

                console.log("Calling content items")
                console.log("content brwser :: " + apiResponse);


                let buttonClass = UE.Class.Load("/YugRuntimeEditor/UI/WB_CS_DraggableMapItem.WB_CS_DraggableMapItem_C");
                let itemStruct = UE.UserDefinedStruct.Load("UserDefinedStruct'/YugRuntimeEditor/UI/Data/Struct_UI_ChunkListItem.Struct_UI_ChunkListItem'");
                let chunkStruct = UE.UserDefinedStruct.Load("UserDefinedStruct'/YugRuntimeEditor/UI/Data/Struct_UI_ItemChunkData.Struct_UI_ItemChunkData'");
                let componentClass = UE.Class.Load("/YugRuntimeEditor/Components/MapItemComponent.MapItemComponent_C");
                let itemClassToLoad = "/Script/Engine.StaticMeshActor";

                var rowCount = 0;
                var colCount = 0;

                apiResponse.forEach(item => {

                    // Check if Item Exists
                    if (item.itemType.toUpperCase() == "GLB") {
                        let url = item.itemGlbUrl
                        let glbFileName = url.split("/");
                        console.log("checking file... " + glbFileName[glbFileName.length - 1]);

                        if (UE.FileHelperBPLibrary.IsFile(`${UE.BlueprintPathsLibrary.ProjectSavedDir()}/GlbItems/${glbFileName}`)) {
                            console.log("File Exists");
                        } else {
                            return;
                        }
                    } else if (item.itemType.toUpperCase() == "STATICMESH" || item.itemType.toUpperCase() == "BLUEPRINT") {
                        if(UE.ChunkCore.GetChunkStatus(item.itemPakChunkData.chunkId) != 4 && UE.ChunkCore.GetChunkStatus(item.itemPakChunkData.chunkId) != 5) {
                            let status = UE.ChunkCore.GetChunkStatus(item.itemPakChunkData.chunkId);
                            console.log("File Exists " + item.itemPakChunkData.chunkId + " :: "+ UE.EChunkCoreStatus[status]);
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }

                    //console.log(item.itemName);

                    let dependentChunks = UE.NewArray(UE.BuiltinInt);

                    item.itemPakChunkData.dependentChunkIds.forEach(ele => {
                        dependentChunks.Add(item.itemPakChunkData.dependentChunkIds);
                    })

                    let chunkData = UE.NewStruct(chunkStruct);
                    chunkData.chunkId = item.itemPakChunkData.chunkId;
                    chunkData.dependentChunkkIds = dependentChunks;
                    chunkData.yugPlaceableStaticMesh = item.itemPakChunkData.yugPlaceableStaticMesh;
                    chunkData.yugPlaceableBlueprintAsset = item.itemPakChunkData.yugPlaceableBlueprintAsset;

                    var itemData = UE.NewStruct(itemStruct);
                    itemData.itemId = item.itemId;
                    itemData.itemName = item.itemName;
                    itemData.itemImageUrl = item.itemImageUrl;
                    itemData.itemType = item.itemType;
                    itemData.itemCategory = item.itemCategory;
                    itemData.itemGlbUrl = item.itemGlbUrl;
                    itemData.itemPakChunkData = chunkData;

                    let size = UE.Vector2D;
                    size.X = 112;
                    size.Y = 145;

                    let itemWidget = UE.UMGManager.CreateWidget(world, buttonClass);
                    itemWidget.getDataFromJS(widgetRef.WBP_YugQuietBrowser.MapEditorHandler, itemData, size);
                    //widgetRef.WBP_YugQuietBrowser.Uniform_Content.AddChildToUniformGrid(itemWidget, rowCount, colCount);
                    widgetRef.WBP_YugQuietBrowser.Uniform_Wrap.AddChildToWrapBox(itemWidget);

                    /*------------------ Handling on Item Dragged in Scene ---------------------*/

                    itemWidget.onItemDragged.Add(async (sceneItem) => {
                        console.log("Item Dragged in Scene :: Called in Content Library")
                        console.log(sceneItem)

                        let itemType = itemWidget.ChunkMapItem.itemType;
                        let sceneId = UE.KismetMathLibrary.RandomIntegerInRange(1000, 9999);
                        let itemMesh;
                        let chunkId = null;
                        let dependentChunkIds = [];

                        if (itemType.toUpperCase() == "GLB") {
                            let item = sceneItem;
                            itemMesh = itemWidget.ChunkMapItem.itemGlbUrl;
                            let itemComponent = item.GetComponentByClass(componentClass);

                            //item.K2_SetActorRotation(new UE.Rotator(-90,0,0),false);

                            await itemComponent.SetItemData(itemWidget.getPrefabId(), itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId, itemWidget.ChunkMapItem.itemName);
                            console.log(itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId);
                            //itemWidget.addToOutlinerTree(item, itemWidget.ChunkMapItem.itemName);

                            if (item != undefined && item != null) {
                                self.placedItems[sceneId] = item;
                            } else {
                                console.warn("Failed Item :: " + sceneId)
                            }
                        }

                        if (itemType.toUpperCase() == "STATICMESH") {
                            let item = sceneItem;
                            itemMesh = itemWidget.ChunkMapItem.itemPakChunkData.yugPlaceableStaticMesh;
                            chunkId = itemWidget.ChunkMapItem.itemPakChunkData.chunkId;

                            for (var i = 0; i < itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds.Num(); i++) {
                                dependentChunkIds.push(itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds.Get(i));
                            }

                            //dependentChunkIds = itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds;    
                            let itemComponent = item.GetComponentByClass(componentClass);

                            await itemComponent.SetItemData(itemWidget.getPrefabId(), itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId, itemWidget.ChunkMapItem.itemName);
                            console.log(itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId);
                            //itemWidget.addToOutlinerTree(item, itemWidget.ChunkMapItem.itemName);

                            if (item != undefined && item != null) {
                                self.placedItems[sceneId] = item;
                            } else {
                                console.warn("Failed Item :: " + sceneId)
                            }
                        }

                        if (itemType.toUpperCase() == "BLUEPRINT") {
                            let item = sceneItem;
                            itemClassToLoad = itemWidget.ChunkMapItem.itemPakChunkData.yugPlaceableBlueprintAsset;
                            chunkId = itemWidget.ChunkMapItem.itemPakChunkData.chunkId;

                            for (var i = 0; i < itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds.Num(); i++) {
                                dependentChunkIds.push(itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds.Get(i));
                            }

                            //dependentChunkIds = itemWidget.ChunkMapItem.itemPakChunkData.dependentChunkkIds;    
                            let itemComponent = item.GetComponentByClass(componentClass);

                            await itemComponent.SetItemData(itemWidget.getPrefabId(), itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId, itemWidget.ChunkMapItem.itemName);
                            console.log(itemWidget.ChunkMapItem.itemType, itemWidget.ChunkMapItem.itemId, sceneId);
                            //itemWidget.addToOutlinerTree(item, itemWidget.ChunkMapItem.itemName);

                            if (item != undefined && item != null) {
                                self.placedItems[sceneId] = item;
                            } else {
                                console.warn("Failed Item :: " + sceneId)
                            }
                        }

                        let transform = itemWidget.MapEditorHandler.GetActorTransform();

                        let edItem = {
                            "sceneId": sceneId,
                            "itemId": itemWidget.ChunkMapItem.itemId,
                            "itemDisplayName": itemWidget.ChunkMapItem.itemName,
                            "itemType": itemType,
                            "ItemTransform": {
                                "Rotation": {
                                    "X": transform["Rotation"].Rotator().Roll,
                                    "Y": transform["Rotation"].Rotator().Pitch,
                                    "Z": transform["Rotation"].Rotator().Yaw
                                },
                                "Scale3D": {
                                    "X": transform["Scale3D"].X,
                                    "Y": transform["Scale3D"].Y,
                                    "Z": transform["Scale3D"].Z
                                },
                                "Translation": {
                                    "X": transform["Translation"].X,
                                    "Y": transform["Translation"].Y,
                                    "Z": transform["Translation"].Z
                                }
                            },
                            "ItemMesh": itemMesh,
                            "dependentChunkIds": dependentChunkIds,
                            "itemProperties": [],
                            "ActorToSpawn": itemClassToLoad,
                            "ActorTags": [],
                            "chunkId": chunkId,
                            "children": [],
                            "script": null
                        }

                        //console.log("Added Item :: " + JSON.stringify(editorItem));

                        if (edItem != undefined && edItem != null) {
                            self.editorItems[sceneId] = edItem;
                            console.log("Added Item to List :: " + JSON.stringify(self.editorItems));
                        }
                    })

                    /*------------------ End Handling on Item Dragged in Scene -----------------*/


                    /*------------------ Handling on Item Place Completed in Scene ---------------------*/
                    itemWidget.ItemPlaced.Add((itemData) => {

                        //console.log(sceneItem.K2_GetActorLocation().ToString());
                        // for(var i in itemData){
                        //     console.log(i);
                        // }
                        //console.log("Dropped Item :: " + a + "  " + sceneItem);
                    })

                    /*------------------ End Handling on Item Place Completed in Scene -----------------*/

                    // Update Row and Column for adding widget in Uniform Grid
                    if (colCount == 2) {
                        rowCount++;
                        colCount = 0;
                    } else {
                        colCount++;
                    }
                });
            } else {
                if(timeoutCount >= 100){
                    console.log("Populate Items :: Content Browser Timed Out");
                    return;
                } else {
                    setTimeout(() => {
                        downloadedItems();
                    }, 1000);
                }
            }
        }

        downloadedItems();

        // Add Existing Scripts to Content Browser
        this.widgetRef.WBP_YugQuietBrowser.scanForExistingScripts();

        return;
    }

    // ----------------------- Handle Existing Island Data -----------------------
    async initScene() {
        let apiResponse = await this.yugCoreObject.setupSceneApi();
        let sceneData = await this.yugCoreObject.readSceneFromFile();
        let location = new UE.Vector(0, 0, 0);
        let rotation = new UE.Vector(0, 0, 0);
        console.log("Map Name :: " + sceneData.baseScenePrefab.scene.unrealMaps.length);

        this.jsonSceneData = sceneData;

        if (sceneData.baseScenePrefab.scene.editableItems.items == undefined && sceneData.baseScenePrefab.scene.editableItems.glbItems == undefined) {
            this.editorItems = sceneData.baseScenePrefab.scene.editableItems;
        } else {
            sceneData.baseScenePrefab.scene.editableItems = {}      // --------------- Test Case
        }

        if (this.jsonSceneData.baseScenePrefab.scene.scripts == undefined) {
            this.jsonSceneData.baseScenePrefab.scene.scripts = {};
        }

        this.handleExistingScene(sceneData);

        /*let scriptClass = UE.Class.Load("/YugRuntimeEditor/Objects/Script/A_Script.A_Script_C");

        if(sceneData.baseScenePrefab.scene.scripts != undefined){
            sceneData.baseScenePrefab.scene.scripts.forEach(script => {
                let scriptActor = world.SpawnActor(scriptClass, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined);
                scriptActor.setScript(script, script, true);
                this.widgetRef.addToOutlinerTree(scriptActor, script)
            })
        }*/

        //UE.LevelStreamingDynamic.LoadLevelInstance(world, apiResponse.environment.envToLoad, location, rotation);
    }
}

let editorSceneHandlerObj = new EditorSceneHandler();
