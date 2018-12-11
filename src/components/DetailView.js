import React from 'react';

class DetailView extends React.Component {

  render () {
    var innerInfo = null
    if(this.props.point && this.props.point!== null) {
      var point = this.props.point.properties

      // Replace <b> </b> tags indicating pont location with link element
      var texto = point.textoCorto
      var start = texto.indexOf("<b>")
      var end = texto.indexOf("</b>")
      var textoEl = null
      if(start >= 0 && end >= 0) {
        var startTexto = texto.substring(0, start)
        var linkTexto = texto.substring(start + 3, end)
        var endTexto = texto.substring(end + 4, texto.length)
        console.log('SUBSTRING', startTexto, 'LINK', linkTexto, 'END', endTexto)

        textoEl =   <div className="h-1/2 p-4 text-black leading-normal pb-3 font-sans overflow-auto" style={{ flex:2 }}>
          <span> {'"' + startTexto} </span>
          <span className="text-white cursor-pointer hover:text-black" onClick={()=> { this.props.searchMapData(point.punto) }}> {linkTexto} </span>
          <span> {endTexto + '"'} </span>
        </div>
      } else {
        textoEl = <div className="h-1/2 p-4 text-black leading-normal pb-3 font-sans overflow-auto" style={{ flex:2 }}>
            "<span dangerouslySetInnerHTML={{__html: point.textoCorto}}></span>"
        </div>
      }

      innerInfo =
      <div className="absolute w-full p-2 pt-4 md:pt-16 pin-b pin-l gradient flex items-center justify-center" style={{ height: "50%"}}>
        <i onClick={() => this.props.getPreviousTexto(this.props.point)} className="fas fa-chevron-left text-4xl text-white hover:text-black cursor-pointer m-2 md:m-12"></i>
        <div className="max-w-xl flex flex-col sm:flex-row flex items-start md:items-center h-full">
          {textoEl}
          <div className="p-4 text-large font-sans text-white flex-1">
              <div
                className="text-lg md:text-4xl mb-6 cursor-pointer hover:text-black"
                onClick={()=> { this.props.searchMapData(point.libro) }}
                >
                  {point.libro}
              </div>
              <div className="cursor-pointer hover:text-black" onClick={()=> { this.props.searchMapData(point.autor) }}>{point.autor} </div>
              <div className="cursor-pointer hover:text-black italic" onClick={()=> { this.props.searchMapData(point.punto) }}>{point.punto} </div>
          </div>
        </div>
        <i onClick={() => this.props.getNextTexto(this.props.point)} className="fas fa-chevron-right text-4xl text-white hover:text-black cursor-pointer m-2 md:m-12"></i>
      </div>
    }
    return innerInfo

  }
}

export default DetailView
