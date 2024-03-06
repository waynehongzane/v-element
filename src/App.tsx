import React, { useState } from 'react';
import Button from './components/Button/button'
import Icon from './components/Icon';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Input from './components/Input';
import { AutoComplete, DataSourceType } from './components/AutoComplete/autoComplete';
import Upload from './components/Upload';
import { UploadFile } from './components/Upload/upload';

const App: React.FC = () => {
  // Input的数据
  const [value, setValue] = useState('')

    // AutoComplete的数据
  // #region
  interface LakerPlayerProps {
    value: string;
    number: number;
  }
  interface GithubUserProps {
    login: string,
    url: string,
    avatar_url: string
  }
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const lakersWithNumber = [
    { value: 'bradley', number: 11 },
    { value: 'pope', number: 1 },
    { value: 'caruso', number: 4 },
    { value: 'cook', number: 2 },
    { value: 'cousins', number: 15 },
    { value: 'james', number: 23 },
    { value: 'AD', number: 3 },
    { value: 'green', number: 14 },
    { value: 'howard', number: 39 },
    { value: 'kuzma', number: 0 },
  ]
  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  // }
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }
  const handleFetch = (query: string) => {
    return fetch(`http://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <h2>Name: {itemWithGithub.value}</h2>
        <p>Number: {itemWithGithub.url}</p>
      </>
    )
  }
  // #endregion

      // upLoad数据
  // #region
  const defaultFileList: UploadFile[] = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
  ]
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
  const filePromise = (file: File) => {
    const newFile = new File([file], 'new_name.docx', { type: file.type })
    return Promise.resolve(newFile)
  }
  // #endregion


  return (
    <div className="App">
      <header className="App-header">
      <p>上传组件</p>
        <Upload
          action="https://run.mocky.io/v3/deb58aba-c046-4519-9c91-9a7f1e36f4f3"
          name="fileName"
          multiple
          drag
        >
          <Icon icon="upload" size="5x" theme="secondary" />
          <br />
          <p>Drag file over to upload</p>
        </Upload>

      <p>自定义模板</p>
        <AutoComplete style={{ width: '300px' }}
          fetchSuggestions={handleFetch}
          onSelect={(item) => { console.log(item) }}
          renderOption={renderOption}
          placeholder='autoComplete'>
        </AutoComplete>

        <p>Input组件</p>
        <Input style={{ width: '300px' }} value={value} onChange={(e) => setValue(e.target.value)}></Input>
        <Input style={{ width: '300px' }} placeholder='default input'></Input>
        <Input style={{ width: '300px' }} placeholder='disabled input' disabled></Input>
        <Input style={{ width: '300px' }} placeholder='input with icon' icon="search"></Input>
        <Input style={{ width: '300px' }} placeholder='large size' size='lg'></Input>
        <Input style={{ width: '300px' }} placeholder='small size' size='sm'></Input>
        <Input style={{ width: '300px' }} placeholder='predend text' prepend="https://"></Input>
        <Input style={{ width: '300px' }} placeholder='append text' append=".com"></Input>

        <p>Menu组件</p>
        <Menu defaultIndex='0' onSelect={(index) => { console.log(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>

          <SubMenu title='drowdown'>
            <MenuItem>
              cool link
            </MenuItem>
            <MenuItem>
              cool link2
            </MenuItem>
          </SubMenu>

          <MenuItem>
            cool link3
          </MenuItem>
        </Menu>

        <p>Icon组件</p>
        <Icon icon="arrow-down" theme='primary' size='10x'></Icon>

        <p>Button组件</p>
        <Button btnType='primary' size='sm'>primary small</Button>
        <Button btnType='primary' size='lg'>primary large</Button>
        <Button btnType='default' size='sm'>default small</Button>
        <Button btnType='default' size='lg'>default large</Button>
        <Button btnType='danger' size='lg'>danger large</Button>
        <Button btnType='link' href='http://www.baidu.com'>Hello</Button>
        <Button btnType='link' href='http://www.baidu.com' disabled>Hello</Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
