import React from 'react'

const Suggestions = () => {
  const suggestion=['Technology' ,'Lifestyle' , 'Food','Sports','Finance','Fashion','Travel','People','AI','Drama','Articles','Gaming','Knowledge'];
  return (
    
      <div className="flex gap-6 mt-0 p-3 w-360 bg-black  justify-center">
      {suggestion.map((suggestions, index) => (
        <div key={index} className="bg-green-400 text-black font-bold p-2 rounded-full shadow-md">
          {suggestions}
        </div>
      ))}
    </div>
  
  )
}

export default Suggestions
