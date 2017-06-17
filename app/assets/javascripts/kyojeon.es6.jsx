import $ from 'jquery'; 
import React from 'react';
import { MenuItem, DropdownButton } from 'react-bootstrap';

export default class KyojeonPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	language: '',
    	book: '',
    	chapter: '',
    	section: '',
    	verse: ''
    }
    this.filterSelected = this.filterSelected.bind(this)
	}

  componentDidMount () { }

  componentWillUnmount () { }

  sortObject(o) {
      return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
  }

  filterBooklist() {

  }

  filterScripture() {

  }

  filterSelected(item) {
  	console.log('item: ', item)
  	if (item.language) {
  		this.setState({book: '', chapter: '', section: '', verse: ''})
  	}
  	if (item.book) {
  		this.setState({chapter: '', section: '', verse: ''})
  	}
  	if (item.chapter) {
  		this.setState({section: '', verse: ''})
  	}
  	if (item.section) {
  		this.setState({verse: ''})
  	}
  	if (item.verse) {

  	}

  	this.setState(item)
  }

	render() {
		var booksForLanguages = {}
		this.props.booklist.forEach ((list)=>{
			//console.log('list: ', list, list.language, booksForLanguages, booksForLanguages[list.language])
			tempArr = [list]
			if (booksForLanguages[list.language]) {
				var tempArr = booksForLanguages[list.language].slice()
				tempArr.push(list)
			} 
			booksForLanguages[list.language] = tempArr
		})
		booksForLanguages = this.sortObject(booksForLanguages)
		var languages = []
		for (var key in booksForLanguages) {
			languages.push(key)
			//console.log('Language and books: ', key, booksForLanguages[key])
		}
		// console.log('languages: ', languages)
		var books = []
		if (this.state.language) {
			books = booksForLanguages[this.state.language].map((item)=>{
				console.log('item: ', item)
				return item.book
			})
		}
		
		console.log('booksForLanguages[this.state]:', booksForLanguages[this.state.language])
		return (
			<div className='bodyContainer'>
				<SelectBar 	languages={languages}
										books={books}
										chapters={[]}
										sections={[]}
										verses={[]}
										filterSelected={this.filterSelected}/>
      </div>
		)
	}
}

class SelectBar extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
    	language: '',
    	book: '',
    	chapter: '',
    	section: '',
    	verse: ''
    }
	}

	componentWillReceiveProps(nextProps) {

	}
	clearSelected(kind, isOpen) {
		console.log('kind:', kind)
		console.log('isOpen:', isOpen)
		if (!isOpen) this.setState({[kind]: ''})
	}

	renderDropdownButton(title, kind, items) {
		if (items && items.length > 0) {
			// var isOpen = this.state[kind] ? false : true  ///open={isOpen}
			// onToggle={this.clearSelected.bind(this, kind)}  
			var menuItems = items.map((item, index)=>{
				return <MenuItem key={index} kind={kind} value={item} onClick={this.filterSelected.bind(this)}>{item}</MenuItem>
			})
		  return (
		    <DropdownButton bsStyle={'default'} title={title} key={kind} id={`dropdown-basic-${kind}`}>
					{menuItems}
		    </DropdownButton>
		  );	
		} else {
			return <div/>
		}
	}

	filterSelected(e) {
		var kind = e.currentTarget.getAttribute('kind')
		var value = e.currentTarget.getAttribute('value')
		var item = {}
		item[kind] = value
		console.log('item[kind]: ', item)
		this.setState(item, ()=>{console.log('this.state:', this.state)})
		this.props.filterSelected(item)
	}

	render () {
		var languageTitle = this.state.language ? this.state.language : 'Language'
		var bookTitle = this.state.book ? this.state.book : 'Book'
		var chaperTitle = this.state.chapter ? this.state.chapter : 'Chapter'
		var sectionTitle = this.state.section ? this.state.section : 'Section'
		var verseTitle = this.state.title ? this.state.title : 'Verse'

		var languageSelector = this.renderDropdownButton(languageTitle, 'language', this.props.languages)
		var bookSelector = this.renderDropdownButton(bookTitle, 'book', this.props.books)
		var chapterSelector = this.renderDropdownButton(chaperTitle, 'chapter', this.props.chapters)
		var sectionSelector = this.renderDropdownButton(sectionTitle, 'section', this.props.sections)
		var verseSelector = this.renderDropdownButton(verseTitle, 'verse', this.props.verses)

		return (
			<div className="selectbarContainer">
				{languageSelector}
				{bookSelector}
				{chapterSelector}
				{sectionSelector}
				{verseSelector}
			</div>
		)
	}
}