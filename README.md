# Get started

## 1. Upload files to SFMC Cloud Pages

1. Go to your SFMC environment and proceed to **Web Studio** > **Cloud Pages**
2. Create a new Collection, for example "DE Fitler Preview"
3. Inside Collection go to "Add Content" (top-right corner) and select **Code Resource**
4. Enter Name, for example "Filter Definition"
5. Press Next and select **JSON** file
6. On your computer: Go to folder `ssjs` and open `main.html` file
7. Copy all content `ctrl + a` then `ctrl + c`
8. Paste copied code to JSON file you have just created in SFMC Cloud Pages `ctrl + v`
9. Now you have the code in your SFMC environment. Press **Save** and **Publish**
10. Each filte in Cloud Pages has a unique url. You can find it on top-left corner of an opened file. Copy the path of the "Filter Definition" file, you will need it in the next steps.

## 2. Edit main.html file 

1. On your computer: open `chrome_extension` folder and open `contentScripts.js` file in any text editor
2. On line 4 replace the value of the variable `FILTER_DEFINITON_URL` with a new url that you have copied during step **1.10**
3. Your new line 4 and variable should look like `const FILTER_DEFINITON_URL = "https://m.opap.gr/filterDefinition"`
4. Save changes
## 3. Install Google Chrome Etension

1. In Google Chrome browser go to **Settings** > **Extensions** and activate **Developer mode** (top-right corner)
2. On the top-left corner press **Upload unpacked**
3. Select `chrome_extension` folder and press upload.
4. Google Chrome Extension (GCE) is now active in your browser

**NOTE:**

- Each time you want to switch between Business units, remember that every BU must have 'Filter Definition' JSON file in Cloud Pages. The variable `FILTER_DEFINITION_URL` located on **line 4** of `contentScripts.js` file must correspond to 'Filter Definiton' JSON file url. Just copy a new path, replace the old one and upload GCE again.


# Notes for OPAP Security Team

## Files overview

### chrome_extension folder

- `background.js` : script that runs Google Chrome Extension (GCE) on background

- `contentScripts.js` : runs the logic of GCE <br>

    `const retrieveRowCount = (filter, deName, filterKey) => {}` <br>
    Does a POST request to cloud pages, returns rows count and changes the text of a button <br>

    `const sendFilter = () => {}` <br>
    Inner function `findFilter()` iterates through the Filter Form and converts collected data to a filter object `resultFilter`. Finally it runs a function `const retrieveRowCount = (filter, deName, filterKey)` <br>

    `const collectData = () => {}` <br>
    Iterates through the page HTML content and saves Data Extension name and Fitler Key to chrome extension storage  <br>

    `const filterButton, filterContainer` <br>
    Filter button definition<br>

    `setInterval()` <br>
    Checks that we are on the right page and paint Fitler button<br>

- `manifest.json` <br>
Contains setup and permissions for GCE.
- `package.json` - 


### ssjs folder

- `filterTemplate` <br>
Contains a filter logic. Starting from `line 350` it processes the POST request and returns respObj object that contains RowCount. All content above line 350 could be used for security and debug proposes. At the moment this code does absolutely nothing.


### GCE workflow

