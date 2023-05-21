'use client'

import { api } from '@/lib/api'
import { Camera } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function CreateMemoryForm() {
  const router = useRouter()
  const [preview, setPreview] = useState<string | null>(null)

  function handleChangeMedia(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    console.log({ files })

    if (!files || files.length === 0) {
      setPreview(null)
      return
    }
    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fileToUpload = formData.get('coverUrl')
    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)
      const uploadResponse = await api.post('/upload', uploadFormData)
      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token')

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          htmlFor="media"
        >
          <Camera className="h-4 w-4" />
          Anexar mídia
        </label>
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>
      <input
        onChange={handleChangeMedia}
        type="file"
        accept="image/*"
        name="coverUrl"
        className="invisible h-0 w-0"
        id="media"
      />
      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      <textarea
        name="content"
        spellCheck={false}
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
      />
      <button className="self-end rounded-2xl bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600">
        Salvar
      </button>
    </form>
  )
}
