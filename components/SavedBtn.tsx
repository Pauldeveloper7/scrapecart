'use client'
import { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';

const SavedBtn = () => {
    const [isSaved, setIsSaved] = useState(false)

  return (
    <div>
          {isSaved ? (
        <TurnedInRoundedIcon className="text-blue-700" onClick={() => setIsSaved(false)} />
      ) : (
        <BookmarkBorderIcon className="text-blue-700" onClick={() => setIsSaved(true)} />
      )}
    </div>
  )
}

export default SavedBtn