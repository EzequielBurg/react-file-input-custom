# React File Input Custom 📲

![App Screenshot](src/assets/input-screenshot.png)

A simple and humble react component for file input in web apps.

> Feel free for contribute with this package. It's for my necessity, but I want to help more devs that needs a different file input.

## Commands

You can install with:

```bash
npm install react-file-input-custom
```
or

```bash
yarn add react-file-input-custom
```

## Example

```javascript
import { ReactFileInputCustom } from 'react-file-input-custom';

const App = () => <ReactFileInputCustom />;
```

## Props Reference

*Nothing is required.*

| Property | Type     | Default     | Description                |
| :-------- | :------- | :------- | :------------------------- |
| **handleChange** | `function` | - | Receives the event from input |
| **acceptedExtensions** | `string` | - | Accepted files extensions |
| **backgroundColor** | `string` | #3699ff | Background color of input |
| **textColor** | `string` | #fff | Color of icon & text |
| **text** | `string` | Selecione um arquivo | Text of input |
| **width** | `string` | 250px | Width of input |
| **classes** | `string` | - | Additional CSS classes for input |
| **...props** | `{ ...props }` | - | Any props for input |

#### Repository
https://github.com/EzequielBurg/react-file-input-custom/tree/master

#### This package was developed in TSDX ➡ https://tsdx.io/ .
